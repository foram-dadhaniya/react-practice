import React, { useState } from 'react'

export const Toggle = () => {
  const [theme, setTheme] = useState('light');
  const toggleHandler = () => {
    return(
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    );
  }
  return (
    <div>
        <button onClick={toggleHandler}>Toggle {theme}</button>
    </div>
  )
}
