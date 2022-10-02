import React from 'react'
import './App.css'

// Ejemplo de UseState
import Counter from './01-useState/Counter';
import { CounterCustonHook } from './01-useState/CounterCustonHook';
// Ejemplo de UserEffect
import { SingleForm } from './02-useEffect/SingleForm';
import { FormCustomHook } from './02-useEffect/FormCustomHook';
// Ejemplo de Multiple custom hook
import { CustomHookMultiple } from './03-multiple-hooks/CustomHookMultiple';
// Ejemplo de useRef
import { FocusScreen } from './04-useRef/FocusScreen';
// Ejemplo useLayoutEffect
import { Layout } from './05-useLayoutEffect/Layout';
// Ejemplo de Memo
import { Memorize } from './06-useMemo/Memorize';
import { MemoHook } from './06-useMemo/MemoHook';
import { CallbackHook } from './06-useMemo/CallbackHook';
// Tarea
import { Padre } from './07-tarea-memo/Padre';
// Reducer
import { TodoApp } from './08-useReducer/TodoApp';




const App = () => {
   return (
      <>
         <TodoApp />
      </>
   )
}

export default App