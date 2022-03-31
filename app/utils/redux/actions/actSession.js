import { typesApp } from "types";


export const actSetUserSession = (user) => {
  return (dispatch) => {
    dispatch((user) => ({
      type: typesApp.USER_SESSION,
      payload: { user },
    }));
  };
};
