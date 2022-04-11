import { typesApp } from "../types";

export const actSetUserSession = (user) => {
  return (dispatch) => {
    dispatch(setUser(user));
  };
};

const setUser = (userLogged) => ({
  type: typesApp.USER_SESSION,
  payload: { userLogged },
});



export const logOutUserSession = () => {
  return (dispatch) => { dispatch(logOut()) }
}
const logOut = () => ({
  type: typesApp.CLEAN_USER_SESSION,
  payload: {}
})
