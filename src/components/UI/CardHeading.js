import React from "react";
import Classes from "./CardHeading.module.css";

const CardHeading = (props) => {
	return <h2 className={Classes.heading}>{props.children}</h2>;
};
