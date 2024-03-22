import React, { useState } from 'react'

const Task = () => {
    let [count,setCount]=useState(0)

    let incr =()=>{
        setCount(count+1)
    }
    let decr =()=>{
        if(count>0){
            setCount(count-1)
        }
        
    }
    let reset =()=>{
        setCount(0)
    }

    
  return (
    <div>
        <h1>{count}</h1>
    <button onClick={incr}>++</button> 
    <button onClick={decr}>--</button>   
    <button onClick={reset}>reset</button>
    </div>
  )
}

export default Task
