import React, { useState } from 'react'

export const Todo = () => {
    const [value,setValue]= useState('')
    const [todo, setTodo]=useState([])
    function addTodo() {
      
        setTodo([...todo,value])
    }
  return (
    <>
      <input
              type='text' name='todo' value={value} onChange={e => setValue(e.target.value)} />
          <button onClick={()=>addTodo()
          }>Add Todo</button>
          <div>{todo.map((e,i) => {
              return (
                  <div key={i}>{e}</div>
              )
          })}</div>
    </>
  )
}
