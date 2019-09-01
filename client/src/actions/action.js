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
      })
      .catch(error => {
        console.log(error.message)
      })
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
      })
      .catch(error => {
        console.log(error)
      });
  };
}

export function getUsers() {
  return dispatch => {
    const options = {
      type: "post",
      url: '/'
    }
    requestHandler(options)
      .then(response => {
        dispatch({ type: CONSTANT.WORKERS_ARR, payload: response.data.workers });
      })
      .catch(error => {
        console.log(error)
      })
  }
}
export function createUser(data) {
  return dispatch => {
    const options = {
      type: 'post',
      url: '/create',
      data
    }
    requestHandler(options)
      .then(() => {
        dispatch(getUsers())
      })
      .catch(response => {
        console.log(response)
      })
  }
}
export function editUser(data) {
  console.log(data)

  return dispatch => {
    const options = {
      type: 'put',
      url: `/update/${data.id}`,
      data
    }
    requestHandler(options)
      .then(() => {
        dispatch(getUsers())
      })
      .catch(response => {
        console.log(response)
      })
  }
}

export function deleteUser(id) {
  return dispatch => {
    const options = {
      type: 'delete',
      url: `/delete/${id}`
    }
    requestHandler(options)
      .then(() => {
        dispatch(getUsers())
        debugger
      })
      .catch(response => {
        console.log(response)
      })
  }
}
// react scripts 3
// react-scripts absolute path
