import { createStore } from "redux";
import reducer from "./reducer";
// pass reducer function
const store = createStore(reducer);
export default store;