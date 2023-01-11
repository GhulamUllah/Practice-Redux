import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ACTION_ATTEMPT,
  PRODUCT_ACTION_FAILED,
  PRODUCT_ACTION_SUCCESS,
  UPDATE_PRODUCT,
} from "./type";

export const getproduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ACTION_ATTEMPT });
    let res = await axios.get("http://localhost:5000/product");
    dispatch({ type: GET_PRODUCTS, payload: res.data.data });
    dispatch({ type: PRODUCT_ACTION_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCT_ACTION_FAILED });

    console.log(error);
  }
};

export const deleteproduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ACTION_ATTEMPT });
    let res = await axios.delete(
      `http://localhost:5000/product/delete-product/${id}`
    );
    dispatch({ type: DELETE_PRODUCT, payload: id });
    dispatch({ type: PRODUCT_ACTION_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCT_ACTION_FAILED });

    console.log(error);
  }
};
export const addproduct = (formdata, navigate) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ACTION_ATTEMPT });
    let res = await axios.post(
      `http://localhost:5000/product/add-product`,
      formdata
    );
    dispatch({ type: ADD_PRODUCT, payload: res.data.data });
    dispatch({ type: PRODUCT_ACTION_SUCCESS });
    navigate("/");
  } catch (error) {
    dispatch({ type: PRODUCT_ACTION_FAILED });

    console.log(error);
  }
};
export const updateproduct = (id, formdata) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ACTION_ATTEMPT });
    let res = await axios.put(
      `http://localhost:5000/product/update-product/${id}`,
      formdata
    );
    dispatch({ type: UPDATE_PRODUCT, payload: res.data.data });
    dispatch({ type: PRODUCT_ACTION_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCT_ACTION_FAILED });

    console.log(error);
  }
};
