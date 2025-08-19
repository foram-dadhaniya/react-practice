import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setUsers(res.data);
        })
    }, []);

    const fetchUser = users.filter((user) => user.name.toLowerCase().includes(searchUser.toLowerCase()));

  return (
    <div className='d-flex flex-column'>
        <input type='text' value={searchUser} onChange={(e) => setSearchUser(e.target.value)}></input>
        <ul>
        {fetchUser.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
    </div>
    
  )
}
