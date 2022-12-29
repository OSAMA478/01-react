import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Heading from "../UI/Heading";
import Classes from "./EmptyValueModal.module.css";

const EmptyValueModal = (props) => {
	return (
		<div className={Classes.layer} onClick={props.onConfirm}>
			<Card>
				<Heading>Invalid Input (empty value)</Heading>
				<p className={Classes.modalParagraph}>
					Please enter valid age (Non negative values)
				</p>
				<Button onClick={props.onConfirm}>okay</Button>
			</Card>
		</div>
	);
};
export default EmptyValueModal;
