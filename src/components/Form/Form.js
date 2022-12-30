import React, { useState } from "react";
import Classes from "./Form.module.css";
import Card from "../UI/Card.js";
import Heading from "../UI/Heading.js";
import Button from "../UI/Button.js";

const Form = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		let errType;

		if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
			errType = "empty";
		} else if (+enteredAge < 0) {
			errType = "negative";
		}

		const usersData = {
			id: Math.random().toString(),
			name: enteredName,
			age: enteredAge,
		};
		props.transferToParent(usersData, errType);
		setEnteredName("");
	};

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card>
			<Heading innerText="Enter User Details" />
			<form onSubmit={submitHandler} className={Classes.form}>
				<div>
					<label htmlFor="username">Name</label>
					<input
						value={enteredName}
						id="username"
						type="text"
						onChange={nameChangeHandler}
						className={Classes.input}
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input
						id="age"
						type="number"
						onChange={ageChangeHandler}
						className={Classes.input}
					/>
				</div>
				<Button innerText="Add user" type="submit" />
			</form>
		</Card>
	);
};

export default Form;
