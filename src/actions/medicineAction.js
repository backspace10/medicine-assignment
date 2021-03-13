import {
  CREATE_MEDICINE,
  DELETE_MEDICINE,
  GET_MEDICINE,
  UPDATE_MEDICINE,
} from "../constants/ types";

// actions
export const addMedicine = (medicine) => ({
  type: CREATE_MEDICINE,
  payload: medicine,
});

// get a medicine
export const getMedicine = (id) => ({
  type: GET_MEDICINE,
  payload: id,
});

// update a  medicine
export const updateMedicine = (medicine) => ({
  type: UPDATE_MEDICINE,
  payload: medicine,
});

// delete a  medicine
export const deleteMedicine = (id) => ({
  type: DELETE_MEDICINE,
  payload: id,
});
