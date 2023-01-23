import { AxiosError } from 'axios';

const useNotification = () => ({
    axiosError: (e: AxiosError | unknown) => { console.log({ axiosError: e }) }
})


export { useNotification }
