export interface IUserLogin {
    username: string | null,
    password: string | null
}

export interface IUser {
    id?: number,
    username: string,
    password: string,
    profilePicture?: string,
    friends?: number[] | []
}
