
import React from 'react';
import "./Button.css"

const Button = ({ setCount }) => {
	return (
		<button 
			className="Button"
			onClick={() => {
				setCount((count)=> count + 1);
			}}
		>
			Dodaj klik
		</button>
	);
};

export default Button;
