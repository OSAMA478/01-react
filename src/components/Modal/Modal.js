import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Heading from "../UI/Heading";
import Classes from "./Modal.module.css";

const Modal = (props) => {
	return (
		<div className={Classes.layer} onClick={props.onConfirm}>
			<Card>
				<Heading innerText="Invalid Input" />
				<p className={Classes.modalParagraph}>{props.message}</p>
				<Button innerText="okay" onClick={props.onConfirm} />
			</Card>
		</div>
	);
};
export default Modal;
