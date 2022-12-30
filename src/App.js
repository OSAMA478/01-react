import React, { useState } from "react";
import Form from "./components/Form/Form";
import Card from "./components/UI/Card";
import Heading from "./components/UI/Heading";
import Users from "./components/Users/Users";
import Classes from "./App.module.css";
import Modal from "./components/Modal/Modal";

const initialUserData = [
	{
		id: Math.random(),
		name: "Osama",
		age: 24,
	},
	{
		id: Math.random(),
		name: "Mansoor",
		age: 24,
	},
	{
		id: Math.random(),
		name: "Aftab",
		age: 23,
	},
];
const App = () => {
	const [usersData, setUserData] = useState(initialUserData);
	const [modalTypeToShow, setModalTypeToShow] = useState();

	const takeValueFromChild = (user, errType) => {
		console.log(errType);
		if (!errType) setUserData((prevValue) => [user, ...prevValue]);
		setModalTypeToShow(errType);
		console.log(user);
	};
	const errHandler = () => {
		setModalTypeToShow(null);
	};
	const deleteHandler = (event) => {
		console.log(event.target);
		const id = event.target.id;
		setUserData(
			usersData.filter((user) => {
				return user.id !== id;
			})
		);
	};

	return (
		<div className={Classes.page}>
			<Form transferToParent={takeValueFromChild} />
			<Card>
				<Heading innerText="Users" />
				<Users onClick={deleteHandler} item={usersData} />
			</Card>

			{modalTypeToShow === "empty" ? (
				<Modal
					message="please type something don't enter empty values"
					onConfirm={errHandler}
				/>
			) : modalTypeToShow === "negative" ? (
				<Modal
					message="use non negative number for age"
					onConfirm={errHandler}
				/>
			) : (
				-1
			)}
		</div>
	);
};

export default App;
