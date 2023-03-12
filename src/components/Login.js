import React from 'react'
import { useState } from 'react'
export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn=evt=>{
        evt.preventDefault()

    }
    const register=()=>{}
    
  return (
    <div>
        
        <label></label>
      <input onChange={(evt)=>setEmail(evt.target.value)} type='email'/>
      <label></label>
      <input onChange={(evt)=>setPassword(evt.target.value)} type='password'/>
      <button  onClick={signIn}  type='submit'>Sign In</button>
      <button onClick={register}>Register</button>
    </div>
  )
}

