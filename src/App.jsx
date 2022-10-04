import React from 'react'

import './App.css'

// UseState
import Counter from './01-useState/Counter';
import { CounterCustonHook } from './01-useState/CounterCustonHook';

// UserEffect
import { SingleForm } from './02-useEffect/SingleForm';
import { FormCustomHook } from './02-useEffect/FormCustomHook';

// Ejemplo de Multiple custom hook
import { CustomHookMultiple } from './03-multiple-hooks/CustomHookMultiple';

// useRef
import { FocusScreen } from './04-useRef/FocusScreen';

// useLayoutEffect
import { Layout } from './05-useLayoutEffect/Layout';

//  useMemo
import { Memorize } from './06-useMemo/Memorize';
import { MemoHook } from './06-useMemo/MemoHook';
import { CallbackHook } from './06-useMemo/CallbackHook';

// Tarea
import { Padre } from './07-tarea-memo/Padre';

// useReducer
import { TodoApp } from './08-useReducer/TodoApp';

// useContext
import { Mainpage } from './09-useContext/Mainpage';




const App = () => {
   return (
      <>
      <Mainpage/>
      </>
   )
}

export default App