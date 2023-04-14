import { useState } from "react";

export const useCounter = (initialState) => {
	const [counter, setCounter] = useState(initialState);

	const increment = (value) => {
		setCounter(counter + value);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(initialState);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
