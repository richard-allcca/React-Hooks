import React, { useState } from 'react'

const Counter = () => {

   const [ state, setState ] = useState({
      count1: 10,
      count2: 20,
      count3: 30
   })

   const { count1, count2, count3 } = state


   return (
      <>
         <h1>Counter 1 {count1}</h1>
         <h1>Counter 2 {count2}</h1>
         <h1>Counter 3 {count3}</h1>

         <hr />

         <button className='btn btn-primary' onClick={() => setState({
            ...state,
            count1: count1 + 1,
         })} >+1</button>

      </>
   )
}

export default Counter