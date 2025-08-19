import React, { useState } from 'react'

export const Tab = () => {
 const [isActive, setIsActive] = useState(0);
 const tab = [
    {id: 1, label: 'Tab1', content: 'Tab 1 content goes here...'},
    {id: 2, label: 'Tab2', content: 'Tab 2 content goes here...'},
    {id: 3, label: 'Tab3', content: 'Tab 3 content goes here...'}
 ]
  return (
    <div>
        
            {tab.map((tab, index) => (
                <button key={index} onClick={() => setIsActive(index)} className={index === isActive ? 'text-success' : 'text-white'} >{tab.label}</button>
            ))}

            <div>
                {tab[isActive].content}
            </div>
    </div>
  )
}
