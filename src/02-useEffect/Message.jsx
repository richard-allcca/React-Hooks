import React, { useEffect, useState } from 'react'

// NOTE - Este componente muestra la forma para desmontar un evento en useEffect   

export const Message = () => {

   const [ coords, setCoords ] = useState({ x: 0, y: 0 })

   useEffect(() => {

      const onMauseMove = ({ x, y }) => {
         setCoords({ x, y })
      }

      window.addEventListener('mousemove', onMauseMove)

      return () => {
         window.removeEventListener('mousemove', onMauseMove)
      }
   }, [])


   return (
      <>
         <h3>Usuario ya existe</h3>
         {/* <div>{coords.x}</div> */}
      </>
   )
}
