export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IAuthLogin {
    email: string;
    password: string;
    token_name: string;
}


export interface IAuthResponse {
    user: IUser;
    token: string;
}
