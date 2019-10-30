import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

function prepareStore(state) {
    return createStore(combineReducers({updateTime: _ => !!_}), state, applyMiddleware(thunk));
}

export default prepareStore;