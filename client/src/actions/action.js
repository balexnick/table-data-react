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
    requestHandler(options).then(response => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
      browserHistory.push("/");
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

    requestHandler(options).then(response => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
      browserHistory.push("/");
    });
  };
}

// react scripts 3
// react-scripts absolute path
