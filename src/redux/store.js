import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension' // install pakeges and import
import logger from "redux-logger";


// createstore from redux and pass a reducer functin as an 





const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))


export default store;

