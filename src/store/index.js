import {createStore,applyMiddleware} from "redux";
import thunkWare from "redux-thunk";
import reducer from "./reducers"
let store=createStore(reducer,applyMiddleware(thunkWare));
export default store;