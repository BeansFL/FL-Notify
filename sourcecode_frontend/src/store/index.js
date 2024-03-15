import { combineReducers, createStore } from "redux";

import notifyReducer from "./reducers/notifySlice"

const rootReducer = combineReducers({
    notifies: notifyReducer,
})

export const store = createStore(rootReducer);

