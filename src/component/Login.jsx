import React, {useState} from 'react'

export const Login=() => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [value, setValue]=useState([])
    function formSubmit(e) {
        e.preventDefault()
        const newEntry={email: email, password: password}
        setValue([...value, newEntry])
        console.log(value)
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <form action="" onSubmit={formSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off"/>
                <input type='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} autoComplete="off"/> 
                <input type="submit"  />
            </form>
            <div>{value.map(({email, password},i) => {
                return (
                    <div key={i}>
                        <p> Email : {email}</p>
                        <p>Password : {password}</p>
                    </div>

                )
            })}</div>
        </>
    )
}
