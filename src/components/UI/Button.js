import React from "react";
import Classes from "./Button.module.css";

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={Classes.button}
			type={`${props.type}`}
		>
			{props.children}
		</button>
	);
};
export default Button;
