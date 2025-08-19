import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import { Carousel } from './Carousel'
import { Counter } from './Conter'
import { Dropdown } from './Dropdown'
import { FetchData } from './FetchData'
import { Modal } from './Modal'
import { Rating } from './Rating'
import { SearchData } from './SearchData'
import { Tab } from './Tab'
import { Todo } from './Todo'
import { Toggle } from './Toggle'
import { MultistepFrom } from './MultistepFrom'
import { DynamicForm } from './DynamicForm'
import { Posts } from './Posts'
import { PostProvider } from './PostContext'
import { CountdownTimer } from './CountdownTimer';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url)
    .then(response => {
        setData(response.data);
    })
    .catch(err => {
      console.error("Error fetching data:", err);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [url]);

  return {data, loading};
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (loading) return <p>Loading...</p>;
  return (
    <div className='d-fle flex-wrap'>
      <Counter/>
      <Toggle/>
      <Todo/>
      <FetchData/>
      <SearchData/>
      <Dropdown/>
      <Tab/>
      <Carousel/>
      <Rating/>
      <div>
        <button type='button' onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h3>Modal Title</h3>
          <p>Content goes here.....</p>
        </Modal>
      </div>
      <MultistepFrom/>
      <DynamicForm/>
      <PostProvider>
        <Posts/>
      </PostProvider>
      {data.slice(0,5).map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
      <CountdownTimer intialSecond={60} />
    </div>
  )
}

export default App
