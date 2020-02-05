import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Items from "./items";

const RootReducer = combineReducers({
	form: formReducer,
	items: Items
});

export default RootReducer;
