import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
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
