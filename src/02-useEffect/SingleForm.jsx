import React, { useState } from 'react'
import { Message } from './Message';


export const SingleForm = () => {

   const [ formState, setFormState ] = useState({
      username: '',
      email: '',
   })

   const { username, email } = formState

   const handleChange = (e) => {
      setFormState({
         ...formState,
         [ e.target.name ]: e.target.value,
      })
   }

   return (
      <>
         <h1>Formulario simple</h1>
         <hr />

         <input type="text"
            placeholder="UserName"
            className='form-control'
            name='username'
            value={username}
            onChange={handleChange}
         />
         <input type="email"
            placeholder="Correo"
            className='form-control mt-2'
            name='email'
            value={email}
            onChange={handleChange}
         />

         {
            username === 'luis' && <Message />
         }
      </>
   )
}
