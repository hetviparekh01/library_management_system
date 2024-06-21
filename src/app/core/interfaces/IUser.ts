export interface IUser{ 
    name: string;
    password: string;
}
export interface IRegister extends IUser {
    role: string;
}



