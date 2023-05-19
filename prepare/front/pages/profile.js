import React from "react";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  //더미데이터
  const followerList = [
    { nickname: "김기율" },
    { nickname: "네이버 오피셜" },
    { nickname: "수원시 공식" },
  ];
  const followingList = [
    { nickname: "커피가게" },
    { nickname: "핸드폰판매점" },
    { nickname: "메롱시티" },
  ];

  return (
    <>
      <header>
        <title>나의 프로필</title>
      </header>
      <AppLayout>
        <div>나의 프로필</div>
      </AppLayout>
    </>
  );
};

export default Profile;
