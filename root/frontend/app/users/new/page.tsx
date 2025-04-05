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

  const addUser = (event) => {
    event.preventDefault()
    // console.log('user added', event.target)

    const userObject = {
      user_id: 1, 
      username: event.target.value, 
      role: 'user', 
      created_at: Date.now(),
      email: ""
    }
    console.log(userObject.username)
    axios.post(url, userObject).then(response => {console.log(response)})
  }

  const userValidation = (userInfo) => {
    // check if username exists already in database 
    // check if email is valid
  }

  
    return (
      <div>
        <form onSubmit={addUser}>
        <input 
        className="flex w-72 outline-solid "
        name="userName"/>
        <button className="outline-solid" type="submit">Begin</button>
      </form>
      </div>
    )
}

export default newUser;