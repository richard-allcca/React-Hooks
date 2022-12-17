import React from 'react'

import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { useTodo } from '../hooks/useTodo';



export const TodoApp = () => {

   const { stateTodo, onDeletedTodo, onToogleTodo, onNewTodo, countTodo, pendingTodo } = useTodo()

   return (
      <>
         <h1>TodoApp: { countTodo } <small>pendientes:{ pendingTodo }</small></h1>
         <hr />

         <div className="row">

            <div className="col">
               <ul className='list-group' >
                  {
                     stateTodo.map((td) => {

                        return (
                           <TodoItem key={ td.id }
                              item={ td }
                              onDeletedTodo={ onDeletedTodo }
                              onToogleTodo={ onToogleTodo }
                           />
                        )
                     })
                  }
               </ul>
            </div>


            <div className='col-5'>
               <h4>Agregar Tarea</h4>
               <hr />

               <TodoForm onNewTodo={ onNewTodo } />
            </div>

         </div>
      </>
   )
}
