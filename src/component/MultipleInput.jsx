import React, { useState } from 'react'

export const MultipleInput=() => {
    const FormValue = {
    username: '',
    email: '',
    phone: '',
    password: ''
  }
  const [user, setUser] = useState(FormValue)
  const [data, setData] = useState([])
  function inputValue (e) {
    //   console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
      setUser({...user, [name]: value})
      
  }
  const SubmitForm = e => {
    e.preventDefault()
    setData([...data, user])
  }
  return (
    <>
      <form action='' onSubmit={SubmitForm}>
        <input
          type='text'
          name='username'
          autoComplete='off'
          placeholder='Type your username '
          value={user.username}
          onChange={inputValue}
        />
        <br />
        <input
          type='email'
          name='email'
          autoComplete='off'
          placeholder='Type your email '
          value={user.email}
          onChange={inputValue}
        />
        <br />
        <input
          type='number'
          name='phone'
          autoComplete='off'
          placeholder='Type your phone '
          value={user.phone}
          onChange={inputValue}
        />
        <br />
        <input
          type='password'
          name='password'
          autoComplete='off'
          placeholder='Type your password '
          value={user.password}
          onChange={inputValue}
        />
        <br />
        <input type='submit' />
      </form>
      <div>
        {data.map(({ email, username, password, phone },i) => {
          return (
            <div key={i}>
              <h1> Username:{username}</h1>
              <h1> Phone:{phone}</h1>
              <h1> Email:{email}</h1>
              <h1> Password:{password}</h1>
            </div>
          )
        })}
      </div>
    </>
  )
}
