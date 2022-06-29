import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducuer from "./services/reducers/todosReducer";

const store = createStore(todosReducuer, applyMiddleware(thunk));

export default store;
