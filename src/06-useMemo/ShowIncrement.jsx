import React, { memo } from "react";

// NOTE
// Este componente debe ser usar "memo" para usar el "useCallback" en el padre
// "memo" no puede memorizar este componente porque su prps es modificado en el padre

const ShowIncrement = ({ incrememt }) => {
	console.log("me volví a generar :(");

	return (
		<button className="btn btn-primary" onClick={() => incrememt()}>
			Incrementar
		</button>
	);
};

export default memo(ShowIncrement);
