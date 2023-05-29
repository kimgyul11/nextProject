export const initialState = {
  isLoggingIn: false, //로그인 시도중 (로딩창 띄우기위해서)
  isLoggedIn: false,
  isLoggingOut: false, //로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
export const loginSuccessAction = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

export const loginFailureAction = (data) => {
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};
export const logoutSuccessAction = () => {
  return {
    type: "LOG_OUT_SUCCESS",
  };
};
export const logoutFailureAction = () => {
  return {
    type: "LOG_OUT_FAILURE",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 로그인
    case "LOG_IN_REQUEST":
      console.log("reducerlogin");
      return {
        ...state,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        me: { ...action.data, nickname: "김기율" },
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    // 로그아웃
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;
