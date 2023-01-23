import type { IAuthLogin, IAuthResponse } from '@/types';
import { api, csrf } from './axios';

/**
 * useUserServices
 * @param api
 * @returns
 */
const useUserServices = () => {
    return {
        /**
         * authLogin
         * @param param
         * @returns
         */
        authLogin: async (param: IAuthLogin) => {
            await csrf();
            return api.post<IAuthResponse>('api/auth/login', param)
        }
    }
}


export { useUserServices }
