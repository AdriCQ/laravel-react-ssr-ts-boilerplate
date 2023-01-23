import React from 'react';
import AuthLayout from '@/layouts/AuthLayout';
import LoginForm from '@/components/form/LoginForm';
import { useStoreSelector } from '@/helpers/redux'
/**
 * AuthPage
 * @returns
 */
const AuthPage = () => {

    const { user } = useStoreSelector(state => state);
    /**
     * -----------------------------------------
     *	View
     * -----------------------------------------
     */

    return <AuthLayout>
        <div className="card border rounded-md bg-white shadow-sm w-72 p-4">
            <LoginForm />
            <div className="bg-white p-4 m-4">
                {user.user?.name}
            </div>
        </div>
    </AuthLayout>;
};

export default AuthPage;
