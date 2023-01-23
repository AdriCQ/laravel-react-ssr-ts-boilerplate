import type { IAuthResponse } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Partial<IAuthResponse> = {
    token: undefined,
    user: undefined
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAuthToken: (state, { payload }: PayloadAction<string>) => {
            state.token = payload;
            return state;
        },
        setUser: (state, { payload }: PayloadAction<IAuthResponse>) => {
            state.user = payload.user;
            state.token = payload.token;
            return state;
        },
    },
});


// Action creators are generated for each case reducer function
export const { setAuthToken, setUser } = userSlice.actions

export default userSlice.reducer
