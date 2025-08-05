import React, { useState } from 'react'

export const Todo = () => {
  const [value, setValue] = useState('');
  const [toDo, setToDo] = useState([]);
  const [editId, setEditId] = useState(null);
  const handleAdd = (event) => {
    setValue(event.target.value);
  };

  const handleToDo = () => {
    if(editId !== null){
        const updatedTodo = toDo.map((todo) => todo.id === editId ? {...todo, name: value} : todo);
        setToDo(updatedTodo);
        setEditId(null);
    } else{
         const newTodo = {
        id: Math.random(),
        name: value
        };
    setToDo((prev) => [...prev, newTodo]);
    }
   setValue('');
  }

  const handleEdit = (selectedId) => {
    const seletedItem = toDo.find((todo) => todo.id === selectedId);
    if(seletedItem){
        setEditId(selectedId);
        setValue(seletedItem.name);
    }
  }

  const handleDelete = (selectedId) => {
    const remainingItem = toDo.filter((todo) => todo.id !== selectedId );
    if(remainingItem){
        setToDo(remainingItem);
    }
  }
  return (
    <div>
        <input type='text' name='user' value={value} onChange={handleAdd}></input>
        <button onClick={handleToDo}>Add</button>
        <ul>
            {toDo.map((user) => (
                <li key={user.id}>
                    <span>{user.name}</span>
                    <span onClick={() => handleEdit(user.id)} >Edit</span>
                    <span onClick={() => handleDelete(user.id)}>Delete</span>
                </li>
            ))}
        </ul>
    </div>
  )
}
