import React from "react";
import { useRef } from "react";

export const FocusScreen = () => {
	const refInput = useRef();

	const onClick = () => {
		// refInput.current.focus();
		refInput.current.select();
	};

	return (
		<>
			<h1>Focus Screen</h1>
			<hr />

			<input
				ref={refInput}
				type="text"
				placeholder="Ingresa tu Nombre"
				className="form-control"
			/>

			<button className="btn btn-primary mt-2" onClick={onClick}>
				Set Focus
			</button>
		</>
	);
};
