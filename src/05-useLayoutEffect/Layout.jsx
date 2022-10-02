import React from 'react'

import { useCounter, useFetch } from '../hooks'

import { BloquoteComponent, Loading } from '../03-multiple-hooks'



export const Layout = () => {

   const { counter, increment } = useCounter(1)

   const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

   const { data, isLoading, error } = useFetch(url)

   const { author, quote } = !!data && data[ 0 ]


   return (
      <>
         <h1>BreakingBad Qoutes</h1>
         <hr />

         {
            isLoading
               ? <Loading />
               : <BloquoteComponent author={author} quote={quote} />
         }

         <button
            disabled={isLoading}
            className='btn btn-primary'
            onClick={() => increment(1)} >
            Next Quote
         </button>
      </>
   )
}

/**
 * NOTE - "!" en data convierte 'undefined' en true, y "!!" lo convierte en false 
 * - asi funciona como condicional, si data es true pasa a la siguiente condición si es false No
 * - esto es para poder destructurar un valor que puede venir como undefined
 */