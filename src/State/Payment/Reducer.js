import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType";

const initialState = {
  createPaymentLoading: false,
  createPaymentError: null,
  updatePaymentLoading: false,
  updatePaymentError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
      return {
        ...state,
        createPaymentLoading: true,
        createPaymentError: null,
      };
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        createPaymentLoading: false,
        createPaymentError: null,
      };
    case CREATE_PAYMENT_FAILURE:
      return {
        ...state,
        createPaymentLoading: false,
        createPaymentError: action.payload,
      };
    case UPDATE_PAYMENT_REQUEST:
      return {
        ...state,
        updatePaymentLoading: true,
        updatePaymentError: null,
      };
    case UPDATE_PAYMENT_SUCCESS:
      return {
        ...state,
        updatePaymentLoading: false,
        updatePaymentError: null,
      };
    case UPDATE_PAYMENT_FAILURE:
      return {
        ...state,
        updatePaymentLoading: false,
        updatePaymentError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
