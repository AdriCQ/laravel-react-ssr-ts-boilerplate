/* eslint-disable camelcase */
import React, { FormEvent, useState } from 'react';
import InputText from '@/components/form/InputText';
import BaseIcon from '@/components/widgets/BaseIcon';
import type { IAuthLogin } from '@/types';
import { useUserServices } from '@/helpers/services'
import { mdiLoading } from '@mdi/js';
import { useStoreDispatch, setUser } from '@/helpers/redux';

function LoginForm() {

    const dispatch = useStoreDispatch();
    const { authLogin } = useUserServices()
    /**
     * -----------------------------------------
     *	Data
     * -----------------------------------------
     */

    const [form, setForm] = useState<IAuthLogin>({
        email: '',
        password: '',
        token_name: 'main'
    });
    const [error, setError] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    /**
     * -----------------------------------------
     *	Methods
     * -----------------------------------------
     */
    /**
     * showError
     * @param err
     */
    function showError(err: string) {
        setError((d) => [...d, err]);

        const timer = setTimeout(() => {
            setError((d) => d.slice(1, d.length));
            clearTimeout(timer);
        }, 2500);
    }

    /**
     * onSubmit
     * @param e FormEvent
     */
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const resp = await authLogin(form);
            console.log({ auth: resp.data })
            dispatch(setUser(resp.data))
        } catch (err) {
            console.log({ err });
            showError('Las Credenciales son incorrectas');
        }
        setLoading(false);
    };

    return (
        <form className="space-y-2" onSubmit={onSubmit}>
            <InputText
                type="email"
                label="Email"
                name="email"
                id="auth-login-email"
                bordered
                value={form.email}
                required
                handleChange={(v) =>
                    setForm((oldVal) => ({
                        ...oldVal,
                        email: v.target.value,
                    }))
                }
            />
            <InputText
                type="password"
                name="password"
                label="Contraseña"
                id="auth-login-password"
                bordered
                value={form.password}
                required
                handleChange={(v) =>
                    setForm((oldVal) => ({
                        ...oldVal,
                        password: v.target.value,
                    }))
                }
            />
            <div className="pt-2">
                <button className="btn btn-primary w-full" type="submit">
                    {loading && (
                        <BaseIcon
                            path={mdiLoading}
                            className="animate-spin mx-2"
                            size="1rem"
                        />
                    )}
                    Iniciar
                </button>
            </div>

            {error && (
                <div className="toast">
                    {error.map((e, k) => (
                        <div className="alert alert-error" key={k}>
                            {e}
                        </div>
                    ))}
                </div>
            )}
        </form>
    );
}

export default LoginForm;
