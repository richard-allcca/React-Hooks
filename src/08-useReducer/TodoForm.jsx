import React, { useState } from "react";
import { useForm } from "../hooks/useForm";


export const TodoForm = ({ onNewTodo }) => {

   const { form, onInputChange, formReset } = useForm({
      description: "",
   });

   const onFormSubmit = (e) => {
      e.preventDefault();
      if (form.description.length <= 1) return;

      const newTodo = {
         id: new Date().getTime() * 3,
         todo: form.description,
         done: false,
      };
      // console.log(newTodo)
      onNewTodo(newTodo);
   };

   return (
      <form onSubmit={onFormSubmit}>
         <input
            type="text"
            placeholder="¿Que hay por hacer?"
            className="form-control mb-2"
            name="description"
            value={form.description}
            onChange={onInputChange}
         />

         <button type="submit" className="btn btn-outline-primary">
            Agregar Tarea
         </button>
      </form>
   );
};
