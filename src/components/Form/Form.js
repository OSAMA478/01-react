import React, { useState } from "react";
import Classes from "./Form.module.css";
import Card from "../UI/Card.js";
import Heading from "../UI/Heading.js";
import Button from "../UI/Button.js";

const Form = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [isValid, setIsValid] = useState();

	const submitHandler = (event) => {
		event.preventDefault();
		if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
			setIsValid("empty");
		}
		if (+enteredAge < 0) {
			setIsValid("negative");
		}

		const usersData = {
			id: Math.random().toString(),
			name: enteredName,
			age: enteredAge,
		};
		props.transferToParent(usersData, isValid);
		setEnteredName("");
		// setEnteredAge("");
		// props.
	};

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
		console.log(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
		console.log(event.target.value);
	};

	return (
		<Card>
			<Heading>Enter User Details</Heading>
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
				<Button type="submit">Add user</Button>
			</form>
		</Card>
	);
};

export default Form;
