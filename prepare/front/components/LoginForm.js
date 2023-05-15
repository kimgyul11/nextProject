import Link from "next/link";
import React, { useCallback, useState } from "react";
import style from "./LoginForm.module.css";

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsLoggedIn(true);
      console.log(id, password);
    },
    [id, password]
  );
  return (
    <form onSubmit={submitHandler} className={style.box}>
      <div className={style.form}>
        <div className={style.inputBox}>
          <input
            type="text"
            name="user_id"
            value={id}
            onChange={onChangeId}
            required
            autoComplete="off"
          />
          <span>아이디</span>
          <i></i>
        </div>
        <div className={style.inputBox}>
          <input
            type="password"
            name="user_password"
            value={password}
            onChange={onChangePassword}
            required
          />
          <span>비밀번호</span>
          <i></i>
        </div>
        <div className={style.links}>
          <Link href="/signup">
            <a>비밀번호를 잊어버렸나요?</a>
          </Link>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </div>
        <button>로그인</button>
      </div>
    </form>
  );
};

export default LoginForm;
