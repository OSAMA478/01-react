import React from "react";
import Classes from "./Heading.module.css";

const Heading = (props) => {
	return <h2 className={Classes.heading}>{props.children}</h2>;
};

export default Heading;
