export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: "coloo88@naver.com",
        nickname: "김기율",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV4AaFqRIma7V3grzYG1IXW5MogxWv8cnWhJ_LE7S&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV4AaFqRIma7V3grzYG1IXW5MogxWv8cnWhJ_LE7S&s",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "kim",
          },
          content: "어렵다 넥스트 JS",
        },
        {
          User: {
            nickname: "메롱메롱",
          },
          content: "하나도 안어려운데?",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 123,
  content: "쓰레기데이터",
  User: {
    id: 1,
    nickname: "호호호",
  },
  Images: [],
  Comment: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};
export default reducer;
