import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

// NOTE
// Callback solo se utiliza cuando se envian resultados de funciones a un hijo
// Para user un "useCallback" el componente hijo debe estar memorizado con "memo"
// El valor enviado al hijo cambia su posición en memoria en cada ejecución
// El hijo recibe un valor diferente en cada envio y el "memo" no lo memoriza

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	// sin argumnento
	const increment = useCallback(() => {
		setCounter((value) => value + 1);
	}, []);
	// con argumnento "c" es el valor de counter
	const increment2 = useCallback((value) => {
		setCounter((c) => c + value);
	}, []);

	return (
		<>
			<h1>useCallback Hook: {counter}</h1>
			<hr />

			<ShowIncrement incrememt={increment} />
		</>
	);
};
