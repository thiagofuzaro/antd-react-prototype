import React from "react";
import { Switch, Route } from "react-router";
import Layout from "../components/Layout";

import Example from "../modules/Example";
import Forbidden from "../modules/Forbidden";
import NotFound from "../modules/NotFound";

const Router = () => {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Index} />
				<Route
					exact
					path="/example/create"
					render={props => <Example {...props} view="create" />}
				/>
				<Route
					exact
					path="/example/read"
					render={props => <Example {...props} view="read" />}
				/>
				<Route
					exact
					path="/example/update"
					render={props => <Example {...props} view="update" />}
				/>
				<Route exact path="/403" component={Forbidden} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	);
};

const Index = () => <h1>BKPI</h1>;

export default Router;
