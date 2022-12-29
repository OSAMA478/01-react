import React, { useState } from "react";
import Form from "./components/Form/Form";
import Card from "./components/UI/Card";
import Heading from "./components/UI/Heading";
import Users from "./components/Users/Users";
import Classes from "./App.module.css";
import EmptyValueModal from "./components/InvalidInput/EmptyValueModal";
import NegValueModal from "./components/InvalidInput/NegValueModal";
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
		// console.log(isValidState);
	};
	const errHandler = () => {
		setModalTypeToShow(null);
	};

	return (
		<div className={Classes.page}>
			<Form transferToParent={takeValueFromChild} />
			<Card>
				<Heading>Users</Heading>
				<Users item={usersData} />
			</Card>
			{modalTypeToShow === "empty" && (
				<EmptyValueModal onConfirm={errHandler} />
			)}
			{modalTypeToShow === "negative" && (
				<NegValueModal onConfirm={errHandler} />
			)}
		</div>
	);
};

export default App;
