import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./AppLayout.module.css";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>메인 로고</a>
        </Link>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </nav>
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </div>
        <div className={styles.rightMenu}>{children}</div>
      </div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
