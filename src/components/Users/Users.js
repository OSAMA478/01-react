import React from "react";
import User from "../Users/User";

// import Classes from "./Users.module.css";

const Users = (props) => {
	return (
		<div>
			{props.item.map((user) => {
				return <User key={user.id} name={user.name} age={user.age} />;
			})}
		</div>
	);
};
export default Users;
