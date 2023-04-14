import React from "react";
import { Outlet } from "react-router-dom";

export const PrivatePage = () => {
	return (
		<>
			<h2>Pagina con ruta Privaca</h2>
			<hr />

			<section>
				<Outlet />
			</section>
		</>
	);
};
