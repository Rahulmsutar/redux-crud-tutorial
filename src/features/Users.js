import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from './UserSlice';

function Users() {
    const [Name, setName] = useState("")
    const [Username, setUsername] = useState("")
    const [NewUsername, setNewUsername] = useState("")
    const DataList = useSelector((state) => state.users.value)
    const List = DataList.map((item, index) => {
        return (
            <div className="card" key={index}>
                <div className="items">
                    <h1>{item.name}</h1>
                    <h1>{item.username}</h1>
                    <input type="text" onChange={(e) => setNewUsername(e.target.value)} />
                    <button onClick={()=>dispatch(updateUser({id:item.id,username:NewUsername}))}>Update User</button>
                    <button onClick={() => dispatch(deleteUser(item.id))}>Delete User</button>
                </div>

            </div>
        )
    })
let Newid = DataList.length - 1;
console.log(Newid)
    const dispatch = useDispatch();

    return (
        <div>
            <div className='form'>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                <button onClick={() => dispatch(addUser({ id: Newid + 2, name: Name, username: Username }))} >Add User</button>
            </div>
            <div className='users_list'>
                {List}

            </div>
        </div>
    )
}

export default Users