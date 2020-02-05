import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import RootReducer from "./reducers";

const store = createStore(RootReducer, applyMiddleware(reduxThunk));

export default store;
