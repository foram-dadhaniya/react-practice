import React, { useEffect, useState } from 'react'

export const CountdownTimer = ({intialSecond}) => {
  const [seconds, setSeconds] = useState(intialSecond);  
  useEffect(() => {
    const timer = setInterval(() => {
        setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds] );
  return (
    <div>{seconds}</div>
  )
}
