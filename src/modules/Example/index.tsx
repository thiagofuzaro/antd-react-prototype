import React from "react";
import { Props } from "./types";
import Create from "./views/Create";
import Read from "./views/Read";
import Update from "./views/Update";

const Example: React.FC<Props> = ({ view }) => {
	const renderSubRoute = () => {
		switch (view) {
			case "create":
				return <Create />;
			case "update":
				return <Update />;
			default:
				return <Read />;
		}
	};

	return renderSubRoute();
};

Example.defaultProps = {
	view: "read"
};

export default Example;
