import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { combineReducers } from "redux";
// import { medicineReducer } from "./reducers/medicineReducer";
// import rootReducer from "./reducers";
import { medicineReducer } from "./reducers/medicineReducer";
// const rootReducer = combineReducers({
//   medicine: medicineReducer,
// });

export const intialState = {
  medicines: [
    {
      id: 1,
      name: "Xyz",
      type: "Tablet",
      quantity: 1000,
    },
    {
      id: 2,
      name: "Xyz",
      type: "Tablet",
      quantity: 1000,
    },
  ],
  medicine: null,
};

const store = createStore(medicineReducer, composeWithDevTools());

export default store;
