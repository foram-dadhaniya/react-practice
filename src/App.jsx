import './App.css'
import { Counter } from './Conter'
import { FetchData } from './FetchData'
import { Todo } from './Todo'
import { Toggle } from './Toggle'

function App() {

  return (
    <div className='d-flex'>
      <Counter/>
      <Toggle/>
      <Todo/>
      <FetchData/>
    </div>
  )
}

export default App
