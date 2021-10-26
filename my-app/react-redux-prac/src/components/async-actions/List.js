import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";







export const UsersList=()=>{
    const users=useSelector((state)=>state.users.users)
    const loadingError=useSelector((state)=>state.users.error);
    const isLoading=useSelector((state)=>state.users.loading);
    const dispatch=useDispatch()

    const fetchUsers=()=>{
        return function(dispatch){
            dispatch({type:'loading'})
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                const users=res.data.map(user=>user.id);
                dispatch({type:'loaded',payload:users})
            })
            .catch(err=>{
                dispatch({type:'error',payload:err})
            })

        }

    }


    return (
        <div>
            <h2>Users List</h2>
            <button onClick={()=>dispatch(fetchUsers())}>Load Users</button>

        </div>
    )




}