import { combineReducers } from "redux";
import noteReducer from "./NoteReducer";
import { createStore } from "redux";

const allReducers = combineReducers({
  notes: noteReducer
});

export default createStore(allReducers);
