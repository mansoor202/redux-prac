import { createStore } from "redux";
import reducer from "./reducer";

const store=createStore(reducer)

console.log("Store in store.js ",store.getState())
export default store;
