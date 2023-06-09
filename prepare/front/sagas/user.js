import { fork, all, put, delay, takeLatest } from "redux-saga/effects";
function logInAPI(data) {
  return axios.post("/api/login");
}
function* logIn(action) {
  try {
    console.log("saga Login");
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.reponse.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}
function* logOut(action) {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.reponse.data,
    });
  }
}
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
