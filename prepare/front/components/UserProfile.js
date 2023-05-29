import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLogginOut } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <div>
      <div>{me.nickname}</div>
      <div>팔로잉</div>
      <div>게시글</div>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};
export default UserProfile;
