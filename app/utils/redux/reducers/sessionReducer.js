import { typesApp } from "types";

const initialState = {};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesApp.USER_SESSION:
      return {
        ...state,
        userLogged: action.payload.user,
        session: true,
      };

    default:
      return state;
  }
};

export default sessionReducer;
