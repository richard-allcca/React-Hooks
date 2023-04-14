import { useState } from "react";

export const useForm = (initialState = {}) => {
	const [form, setForm] = useState(initialState);

	const onInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const formReset = () => {
		setForm(initialState);
	};

	return {
		form,
		onInputChange,
		formReset,
	};
};
