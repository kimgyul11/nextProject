import React from "react";
import styles from "./Avatar.module.css";

export default function Avatar({ post, id }) {
  const { nickname } = post.User;
  return (
    <div className={styles.avatar_container}>
      <div className={styles.avatar_wrap}>
        <div className={styles.avatar}>{nickname[0]}</div>
        <p>{nickname}</p>
      </div>
      <div className={styles.btns}>
        {id && post.User.id === id ? (
          <>
            <button>수정</button>
            <button>삭제</button>
          </>
        ) : (
          <button>신고</button>
        )}
      </div>
    </div>
  );
}
