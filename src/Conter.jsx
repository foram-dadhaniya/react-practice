import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
        <button onClick={() => setCount(count + 1)} >Increment</button>
        <h5>{count}</h5>
        <button onClick={() => count > 0 && setCount(count - 1)} >Decrement</button>
        </div>
    )
}