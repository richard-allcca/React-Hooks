import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodo = () => {

   const initialState = [];

   const init = () => {
      return JSON.parse(localStorage.getItem('ls-todo')) || [];
   }

   // State

   const [ stateTodo, dispatch ] = useReducer(todoReducer, initialState, init)

   useEffect(() => {

      localStorage.setItem("ls-todo", JSON.stringify(stateTodo))

   }, [ stateTodo ])

   // Methods

   const onNewTodo = (newTodo) => {

      dispatch({ type: "ADD-TASK", payload: newTodo })

   }

   const onDeletedTodo = (id) => {

      dispatch({ type: 'DELETED-TASK', payload: id })
      localStorage.setItem('ls-todo', stateTodo)
   }

   const onToogleTodo = (id) => {

      dispatch({ type: 'UPDATE-DONE', payload: id })
   }

   let countTodo = stateTodo.length

   let pendingTodo = stateTodo.filter(todo => !todo.done).length

   return {
      stateTodo,

      onNewTodo,
      onDeletedTodo,
      onToogleTodo,

      countTodo,
      pendingTodo
   }
}