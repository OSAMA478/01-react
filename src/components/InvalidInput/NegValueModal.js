import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Heading from "../UI/Heading";
import Classes from "./NegValueModal.module.css";

const NegValueModal = (props) => {
	const modalHandler = () => {};
	return (
		<div className={Classes.layer} onClick={props.onConfirm}>
			<Card>
				<Heading>Invalid Input 1 (negative value)</Heading>
				<p className={Classes.modalParagraph}>
					Please enter valid name (Non empty values)
				</p>
				<div onClick={modalHandler}>
					<Button onClick={props.onConfirm}>okay</Button>
				</div>
			</Card>
		</div>
	);
};
export default NegValueModal;
