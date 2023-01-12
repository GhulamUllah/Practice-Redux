import {
  Alert_controler_error,
  Alert_controler_success,
  REMOVE_ALTER,
  SET_ALERT,
} from "./action/type";

let initialState = {
  message: null,
  alterts: [],
};
export default function Alerts(state = initialState, action) {
  switch (action.type) {
    case Alert_controler_success:
      return {
        message: action.payload.data.message,
      };
    case Alert_controler_error:
      return {
        message: action.payload,
      };
    case SET_ALERT:
      return {
        ...state,
        alterts: [...state.alterts, action.payload],
      };
    case REMOVE_ALTER:
      return {
        ...state,
        alterts: state.alterts.filter((a) => a.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
}
