import { fork, all, put, delay, takeLatest } from "redux-saga/effects";

export default function* postSaga() {
  function addPostAPI(data) {
    return axios.post("/api/addPost", data);
  }
  function* addPost(action) {
    try {
      // const result = yield call(addPostAPI, action.data);
      yield delay(1000);
      yield put({
        type: "ADD_POST_SUCCESS",
        data: result.data,
      });
    } catch (err) {
      yield put({
        type: "ADD_POST_FAILURE",
        data: err.reponse.data,
      });
    }
  }
  function* watchAddPost() {
    yield takeLatest("ADD_POST_REQUEST", addPost);
  }
  yield all([fork(watchAddPost)]);
}
