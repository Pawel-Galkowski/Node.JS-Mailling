import {
  FORM_ERROR,
  FORM_SEND,
} from "../actions/types";

const initialState = {
  forms: [],
  form: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case FORM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FORM_SEND:
      return {
        ...state,
        forms: payload,
        loading: false,
      };
    default:
      return state;
  }
}
