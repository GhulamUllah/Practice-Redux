import axios from "axios";
import {
  Alert_controler_error,
  Alert_controler_success,
  Load_user,
  Load_USER_ATTEMPT,
  Load_USER_FAILED,
  Load_USER_SUCCESS,
  Login_controler,
  Logout_controler,
  Resgister_user,
} from "./action/type";
import Setauthtoken from "../../Component/User/Setheadertoken";
import { setalert } from "./action/alertsaction";

export let authregister = (option) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:5000/user/register", option);

    dispatch({
      type: Resgister_user,
      payload: res,
    });
    dispatch(setalert("User Register Success", "success"));
  } catch (error) {
    dispatch(setalert(error?.response?.data?.message, "error"));
  }
};

export let loaduser = () => async (dispatch) => {
  if (localStorage.token) {
    Setauthtoken(localStorage.token);
  }
  try {
    dispatch({ type: Load_USER_ATTEMPT });
    let user = await axios.get("http://localhost:5000/user");
    console.log(user);
    dispatch({
      type: Load_user,
      payload: user,
    });
    dispatch({ type: Load_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: Load_USER_FAILED });

    // dispatch({
    //   type: Alert_controler_error,
    //   payload: error.response.data.message,
    // });
  }
};
export let User_Login = (option) => async (dispatch) => {
  try {
    let login = await axios.post("http://localhost:5000/user/login", option);
    console.log(login);
    localStorage.setItem("token", login.data.token);

    dispatch({
      type: Login_controler,
      payload: login,
    });
    dispatch(setalert("User Login Success", "success"));
  } catch (error) {
    console.log(error);

    dispatch(setalert(error.response.data.message, "error"));
  }
};
export let logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: Logout_controler,
  });
  dispatch(setalert("Logout Success", "success"));
};
