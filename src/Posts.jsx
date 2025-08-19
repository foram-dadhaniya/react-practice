import React, { useContext, useState } from 'react';
import { PostContext } from './PostContext';

export const Posts = () => {
 const [newPost, setNewPost] = useState('');
  const {posts, dispatch} = useContext(PostContext);
  const handleAdd = () => {
    dispatch({
        type: 'ADD_POST',
        payload: newPost
    })
  }
  const handleRemove = (index) => {
    dispatch({
        type: 'REMOVE_POST',
        payload: index
    })
  }
  return (
    <div>
        <input type='text' value={newPost} onChange={(e) => setNewPost(e.target.value)} ></input>
        <button type='button' onClick={handleAdd}>Add Post</button>
        <ul>
            {posts.map((post, index) => (
                <li key={index}>{post} <span onClick={() => handleRemove(index)}>Remove</span></li>
            ))}
        </ul>
    </div>
  )
}
