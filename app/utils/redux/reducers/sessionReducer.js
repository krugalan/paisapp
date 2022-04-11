import { typesApp } from "../types";

const initialState = {};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesApp.USER_SESSION:
      return {
        ...state,
        userLogged: action.payload.userLogged,
        token: true,
      };

    case typesApp.CLEAN_USER_SESSION:
      return {
        userLogged: {},
        token: false,
      };

    default:
      return state;
  }
};

export default sessionReducer;
