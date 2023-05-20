import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <div>
      <div>아이디</div>
      <div>팔로잉</div>
      <div>게시글</div>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};
export default UserProfile;
