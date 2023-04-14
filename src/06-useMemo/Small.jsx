import React, { memo } from "react";

// NOTE
// Este componente esta memorizado y solo puede volver a renderizar si el valor enviado por el padre es alterado y recibido aquí.

const Small = ({ value }) => {
	console.log("Me volví a dibujar");

	return <small>{value}</small>;
};

export default memo(Small);
