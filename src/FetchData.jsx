import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const FetchData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setUsers(res.data);
        })
    }, []);

  return (
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  )
}
