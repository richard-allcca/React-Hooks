import React from "react";

import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		error: null,
	});

	const getQuote = async () => {
		let resp = await fetch(url);
		let data = await resp.json();

		setState({
			data,
			isLoading: false,
			error: null,
		});
	};

	useEffect(() => {
		getQuote();
	}, [url]);

	return state;
};
