import React from "react";
import User from "../Users/User";

const Users = (props) => {
	return (
		<div>
			{props.item.map((user) => {
				return (
					<User
						onClick={props.onClick}
						innerText={`${user.name} (${user.age} years old)`}
						key={user.id}
						id={user.id}
						name={user.name}
						age={user.age}
					/>
				);
			})}
		</div>
	);
};
export default Users;
