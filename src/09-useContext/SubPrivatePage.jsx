import React from 'react'
import { useLocation } from 'react-router-dom'

export const SubPrivatePage = () => {

   const location = useLocation()

   return (
      <>
         <h4>SubPrivatePage</h4>

         <div className="">
            Esta contenido se muestra dentro de la sub ruta con un param:id, Ademas se puede usar una condición para mostrar componentes similares a este.
         </div>
         <span>{JSON.stringify(location.search)}</span>
         <hr />
      </>
   )
}
