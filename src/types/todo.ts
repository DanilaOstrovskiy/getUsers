export type initialStateType = {
    users: any[],
    loading: boolean,
    error: null | string
}


export type FetchUserAction = {
    type: "FETCH_USERS";

}
export type FetchUserSuccessAction = {
    type: "FETCH_USERS_SUCCESS";
    payload: any[]

}
export type FetchUserErrorAction = {
    type: "FETCH_USERS_ERROR";
    payload: string;

}

export type UserActionsType = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
};