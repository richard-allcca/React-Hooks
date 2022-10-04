import React from 'react'
import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { AboutPage } from './AboutPage';
import { ErrorPage } from './Errorpage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './components/Navbar';
import { UserProvider } from './context/UserContext';

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

            {/* <Route path='/*' element={<ErrorPage/>} /> */}
            <Route path="/*" element={<Navigate to={<AboutPage />} />} />
         </Routes>

      </UserProvider>
   );
}

// NOTE - Esta sección solo fue un ejemplo de como funciona useContext en la superficie