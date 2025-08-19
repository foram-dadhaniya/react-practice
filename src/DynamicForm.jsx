import React, { useState } from 'react'

export const DynamicForm = () => {
  const [addInput, setAddInput] = useState([{value: ''}])
  const handleRemove = (index) => {
    const newArray = addInput.slice();
    newArray.splice(index,1);
    setAddInput(newArray);
  }

  const handleAdd = () => {
    setAddInput([...addInput, {value: ''}]);
  }
  const handleChange = (index, event) => {
    const newArray = addInput.slice();
    newArray[index].value = event.target.value;
    setAddInput(newArray);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', addInput);
  }
  return (
    <form onSubmit={handleSubmit}>
        {addInput.map((field, index) => (
            <div key={index}>
                <input type='text' value={field.value} onChange={(e) => handleChange(index, e)} ></input>
                <button type='button' onClick={() => handleRemove(index)}>Remove</button>
            </div>
        ))}
        <button type='button' onClick={handleAdd}>Add More</button>
    </form>
  );
};
