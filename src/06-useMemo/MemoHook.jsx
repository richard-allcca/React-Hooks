import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

// NOTE
//  useMemo, memoriza el return de una función y cambia el su dependencia lo hace

const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log("ahí vamos...");
	}

	return `${iterationNumber} iteracion realizadas`;
};

export const MemoHook = () => {
	const [show, setShow] = useState(true);
	const { counter, increment } = useCounter(500);

	const valueMemorize = useMemo(() => {
		heavyStuff(counter);
	}, [counter]);

	return (
		<>
			<h1>
				Counter Memo: <small>{counter}</small>
			</h1>
			<hr />

			<h4>{valueMemorize}</h4>

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
