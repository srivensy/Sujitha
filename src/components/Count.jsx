
import { useState,React } from 'react'

const Count = () => {

    const [count,Setcount] = useState(0)

    const add = () =>{
        Setcount(count+10)
    }

    const sub = ()=>{
        Setcount(count-1)
    }

    const reset = () =>{
        Setcount(0)
    }

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={add}>Add</button>
       <button onClick={sub}>Sub</button>
       <button onClick={reset}>reset</button>
    </div>
  )
}

export default Count
