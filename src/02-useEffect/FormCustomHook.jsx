import React from 'react'

import { useForm } from '../hooks'


const initialForm = {
   name: '',
   email: '',
   password: ''
}

export const FormCustomHook = () => {

   const { form, onInputChange, formReset } = useForm(initialForm)


   return (
      <>
         <h1>Formulario con Custom Hook</h1>
         <hr />

         <input type="text"
            placeholder="UserName"
            className='form-control'
            name='name'
            value={form.name}
            onChange={onInputChange}
         />
         <input type="email"
            placeholder="Correo"
            className='form-control mt-2'
            name='email'
            value={form.email}
            onChange={onInputChange}
         />
         <input type="password"
            placeholder="Password"
            className='form-control mt-2'
            name='password'
            value={form.password}
            onChange={onInputChange}
         />

         <button className='btn btn-primary' onClick={formReset} >Reset</button>
      </>
   )
}
