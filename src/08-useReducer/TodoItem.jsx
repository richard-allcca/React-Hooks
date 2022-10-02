import React from "react";

export const TodoItem = ({ item, onDeletedTodo, onToogleTodo }) => {
   return (
      <li
         onClick={() => onToogleTodo(item.id)}
         className="list-group-item d-flex justify-content-between"
      >
         <span
            className={`align-self-center ${item.done ? "task-through" : ""}`}
         >
            {item.todo}
         </span>

         <button
            className="btn btn-danger"
            onClick={() => onDeletedTodo(item.id)}
         >
            Borrar
         </button>
      </li>
   );
};
