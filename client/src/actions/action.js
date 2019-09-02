import { browserHistory } from "../index";
import * as CONSTANT from "../constant";
import { requestHandler } from "../utils/requestHandler";
export function login(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/login",
      data
    };
    requestHandler(options)
      .then(response => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
        browserHistory.push("/");
        dispatch({ type: CONSTANT.ERROR_MESSAGE, payload: "" });
      })
      .catch(err => {
        if (err.response && err.response.data.message) {
          dispatch({
            type: CONSTANT.ERROR_MESSAGE,
            payload: err.response.data.message
          });
        }
      });
  };
}

export function register(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/register",
      data
    };

    requestHandler(options)
      .then(response => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
        browserHistory.push("/");
        dispatch({ type: CONSTANT.ERROR_MESSAGE, payload: "" });
      })
      .catch(err => {
        if (err.response && err.response.data.message) {
          dispatch({
            type: CONSTANT.ERROR_MESSAGE,
            payload: err.response.data.message
          });
        }
      });
  };
}

export function getUsers(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/",
      data
    };
    requestHandler(options)
      .then(response => {
        console.log(response);
        dispatch({
          type: CONSTANT.WORKERS_ARR,
          payload: response.data.workers
        });
        dispatch({ type: CONSTANT.TABLE_PAGE, payload: response.data.page });
        dispatch({
          type: CONSTANT.ALL_TABLE_PAGES,
          payload: response.data.pages
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function createUser(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/create",
      data
    };
    requestHandler(options)
      .then(() => {
        dispatch(getUsers());
        dispatch({ type: CONSTANT.OPEN_MODAL, payload: false });
        dispatch({ type: CONSTANT.ERROR_MESSAGE, payload: "" });
      })
      .catch(err => {
        if (err.response && err.response.data.message) {
          dispatch({
            type: CONSTANT.ERROR_MESSAGE,
            payload: err.response.data.message
          });
        }
      });
  };
}
export function editUser(data) {
  return (dispatch, getState) => {
    const options = {
      type: "put",
      url: `/update/${data.id}`,
      data
    };
    requestHandler(options)
      .then(() => {
        dispatch(getUsers({ page: getState().page }));
        dispatch({ type: CONSTANT.OPEN_EDIT_MODAL, payload: false });
        dispatch({ type: CONSTANT.ERROR_MESSAGE, payload: "" });
      })
      .catch(err => {
        if (err.response && err.response.data.message) {
          dispatch({
            type: CONSTANT.ERROR_MESSAGE,
            payload: err.response.data.message
          });
        }
      });
  };
}

export function deleteUser(id) {
  return (dispatch, getState) => {
    const options = {
      type: "delete",
      url: `/delete/${id}`
    };
    requestHandler(options)
      .then(() => {
        dispatch(getUsers({ page: getState().page }));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
// react scripts 3
// react-scripts absolute path
