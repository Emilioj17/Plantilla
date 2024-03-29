import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/AppContext";
import { Home } from "./js/views/Home";
import { Login } from "./js/views/Login";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="Main">
			<BrowserRouter basename={basename}>
					<Switch className="Switch">
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Login">
							<Login />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
