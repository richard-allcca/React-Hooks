import React, { useState } from "react";
import { useCounter } from "./../hooks";
import Small from "./Small";

// NOTE
// Memo, solo memoriza un componente si el valor enviado no es de una función
// Aquí vemos el uso del componente "Small" memorizado con "memo"
// Esto evita que una función del padre modifique un component hijo

export const Memorize = () => {
	const { counter, increment } = useCounter(10);

	const [show, setShow] = useState(true);

	return (
		<>
			<h1>
				Counter Memo: <Small value={counter} />
			</h1>
			<hr />

			<button className="btn btn-primary" onClick={() => increment(1)}>
				+1
			</button>

			<button
				className="btn btn-outline-primary"
				onClick={() => setShow(!show)}
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
