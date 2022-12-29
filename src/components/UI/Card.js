import React from "react";

import Classes from "./Card.module.css";

const Card = (prop) => {
	return <div className={Classes.card}>{prop.children}</div>;
};
export default Card;
