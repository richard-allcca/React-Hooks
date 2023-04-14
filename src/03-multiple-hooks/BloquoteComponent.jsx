import React, { useLayoutEffect, useRef, useState } from "react";

export const BloquoteComponent = ({ quote, author }) => {
	const [boxSize, setBoxSize] = useState({ x: 0, y: 0 });

	const pRef = useRef();

	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, []);

	return (
		<>
			<blockquote className="blockquote text-right">
				<p ref={pRef} className="mb-2">
					{quote}
				</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
