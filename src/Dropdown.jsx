import React, { useState } from 'react'

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <button type='button' onClick={() => setIsOpen(!isOpen)} >Dropdown</button>
        { isOpen ? <ul>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Angular</li>
        </ul> : null}
    </div>
  )
}
