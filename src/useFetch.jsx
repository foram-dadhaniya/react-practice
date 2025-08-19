import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(url).then(response => {
        setData(response.data);
    })
  }, [url])
  return (
    <div>{data}</div>
  )
}
