"use client";

import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Input } from "@material-tailwind/react";

const newUser = () => {

  const url = "http://localhost:8000/users/"
  const promise = axios.get(url)

  promise
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err.message))

  const [user, setUser] = useState([])
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  const addUser = (username: string, email: string, password: string) => {
    const userObject = {
      user_id: 1, 
      username: username, 
      role: 'user', 
      created_at: Date.now(),
      email: email,
      password: password
    }
    axios.post(url, userObject).then(response => {console.log(response)})
    console.log(userObject.username)
  }

  const userValidation = (userInfo) => {
    // check if username exists already in database 
    // check if email is valid
  }
  
    return (
      <div>
        <h1>Welcome to pickwisely.ai</h1>
        <h1>What is your name?</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          addUser(username, email, password)
        }}>
        <input 
          className="font-mono bg-black text-green-500 px-4 py-2 w-72"
          name="userName"
          placeholder="$ enter username _"
          style={{
            caretColor: 'green',
            outline: 'none',
            border: 'none'
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              setUsername(e.currentTarget.value)
            }
          }}
        />
        <h1>Nice to meet you, {username}. Please enter your email.</h1>
        <input
          className="font-mono bg-black text-green-500 px-4 py-2 w-72"
          name="email"
          placeholder="$ enter email _"
          style={{
            caretColor: 'green',
            outline: 'none',
            border: 'none'
          }}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              setEmail(e.currentTarget.value)
            }
          }}
        />
        <h1>Please create a password.</h1>
        <input
          className="font-mono bg-black text-green-500 px-4 py-2 w-72"
          name="password"
          type="password"
          placeholder="$ enter password _"
          style={{
            caretColor: 'green',
            outline: 'none',
            border: 'none'
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className="font-mono bg-black text-green-500 px-4 py-2 w-72 block mt-4" 
          type="submit"
        >
          Begin
        </button>
      </form>
      </div>
    )
}

export default newUser;