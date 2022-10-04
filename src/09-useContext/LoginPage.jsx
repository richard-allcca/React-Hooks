import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

   const { name, email } = useContext(UserContext)

   return (
      <>
         <h1>LoginPage</h1>
         <hr />
      </>
   )
}