import React from "react";
import Classes from "./User.module.css";

const User = (props) => {
	return (
		<p id={props.id} onClick={props.onClick} className={Classes.user}>
			{props.innerText}
		</p>
	);
};
export default User;
