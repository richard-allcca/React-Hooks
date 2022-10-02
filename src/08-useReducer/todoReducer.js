

export const todoReducer = (initialState = [], actions) => {

   switch (actions.type) {
      case "ADD-TASK":
         return [ ...initialState, actions.payload ];

      case "DELETED-TASK":
         return initialState.filter((item) => item.id !== actions.payload);

      case "UPDATE-DONE":
         return initialState.map(todo => {

            if (todo.id === actions.payload) {
               return {
                  ...todo,
                  done: !todo.done
               }
            }
            return todo;
         })

      default:
         return initialState;
   }
};
