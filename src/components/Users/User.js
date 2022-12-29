import React from "react";
import Classes from "./User.module.css";

const User = (props) => {
	return (
		<p className={Classes.user}>
			{props.name} ({props.age} years old)
		</p>
	);
};
export default User;
