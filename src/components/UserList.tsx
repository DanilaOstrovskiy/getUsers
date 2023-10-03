import React, {useEffect} from 'react';
import {useTypedSelector} from "../hook/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsersTC} from "../store/action-creators/userTC";
import {User} from "../types/todo";



const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsersTC() as any)
    }, [])

    if (loading) {
        return <h1>Идёт загрузка..</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    console.log(users)
    return (
        <div>
            {(users as User[]).map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;