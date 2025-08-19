import React, { useState } from 'react'

export const SearchData = () => {
  const data = [
    {id:1, name: 'Foram'},
    {id:2, name: 'Dhaivat'},
    {id:3, name: 'Dhyara'},
  ]
  const [searchText, setSearchText] = useState('');
  const fetchData = data.filter((item) => (
    item.name.toLowerCase().includes(searchText.toLowerCase())
  ));
  return (
    <div>
        <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
        <ul>
            {fetchData.map((data) => (
                <li key={data.id}>{data.name}</li>
            ))}
        </ul>
    </div>
  )
}
