import { REMOVE_ALTER, SET_ALERT } from "./type";
import { v4 as uuidv4 } from "uuid";

export const removealert = (id) => (dispatch) => {
  dispatch({ type: REMOVE_ALTER, payload: id });
};

export const setalert =
  (msg, type, id = uuidv4(), time = 5000) =>
  (dispatch) => {
    dispatch({ type: SET_ALERT, payload: { id, msg, type } });
    setTimeout(() => {
      dispatch(removealert(id));
    }, time);
  };
