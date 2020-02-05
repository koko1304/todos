import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux-store";

import InputBox from "./containers/inputbox";

const App = () => {
	return (
		<Provider store={store}>
			<div className="container">
				<div className="py-4">
					<h1 className="display-4 text-center mb-3">Todos App</h1>
					<InputBox />
				</div>
			</div>
		</Provider>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
