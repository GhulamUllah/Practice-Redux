import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ACTION_ATTEMPT,
  PRODUCT_ACTION_FAILED,
  PRODUCT_ACTION_SUCCESS,
  UPDATE_PRODUCT,
} from "./action/type";

let initialState = {
  products: [],
  loading: false,
  product: {},
};
function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ACTION_ATTEMPT: {
      return {
        ...state,
        loading: true,
      };
    }
    case PRODUCT_ACTION_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case PRODUCT_ACTION_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) => p._id !== action.payload),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((p) =>
          p._id == action.payload._id ? action.payload : p
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
export default productReducer;
