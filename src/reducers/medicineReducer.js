import {
  CREATE_MEDICINE,
  GET_MEDICINE,
  UPDATE_MEDICINE,
} from "../constants/ types";
import { intialState } from "../store";

export const medicineReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_MEDICINE:
      return {
        ...state,
        medicines: [action.payload, ...state.medicines],
      };
    case GET_MEDICINE:
      let arr = state.medicines.filter(
        (medicine) => medicine.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        medicine: arr,
      };
    case UPDATE_MEDICINE:
      return {
        ...state,
        medicines: state.medicines.map((medicine) =>
          medicine.id === action.payload.id ? action.payload : medicine
        ),
      };

    default:
      return state;
  }
};
