import React, { useRef } from "react";
import Classes from "./Form.module.css";
import Card from "../UI/Card.js";
import Heading from "../UI/Heading.js";
import Button from "../UI/Button.js";

const Form = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		console.log();
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
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	return (
		<Card>
			<Heading innerText="Enter User Details" />
			<form onSubmit={submitHandler} className={Classes.form}>
				<div>
					<label htmlFor="username">Name</label>
					<input
						placeholder="enter user name"
						id="username"
						type="text"
						className={Classes.input}
						ref={nameInputRef}
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input
						placeholder="enter user age"
						id="age"
						type="number"
						// onChange={ageChangeHandler}
						className={Classes.input}
						ref={ageInputRef}
					/>
				</div>
				<Button innerText="Add user" type="submit" />
			</form>
		</Card>
	);
};

export default Form;
