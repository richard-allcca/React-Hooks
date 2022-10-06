import React from 'react'
import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { AboutPage } from './AboutPage';
import { ErrorPage } from './Errorpage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './components/Navbar';
import { UserProvider } from './context/UserContext';
import { PrivatePage } from './PrivatePage';
import { SubPrivatePage } from './SubPrivatePage';

export const Mainpage = () => {
   return (
      <UserProvider>

         <h1>Mainpage</h1>

         <Navbar />

         <hr />

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path='/private' element={<PrivatePage />} >
               <Route index element={<div>Elemento Fijo</div>} />
               <Route path=':id' element={<SubPrivatePage />} />
            </Route>

            <Route path="/*" element={<Navigate to={<AboutPage />} />} />
         </Routes>

      </UserProvider >
   );
}

// NOTE - El Route con "index" esta fija mientras falte un "param/id" en el sgte Route
// Navigate - tiene la propiedad "replace" para eliminar el salto atras en navegación
// STUB -  <Route path='/*' element={<ErrorPage/>} /> 