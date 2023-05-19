import { useCallback, useState } from "react";
import useInput from "../hooks/useInput";
import styles from "./SignupForm.module.css";

const SingupForm = () => {
  const [id, onchangeId] = useInput("");
  const [nickname, onchangeNickname] = useInput("");
  const [password, onchangePassword] = useInput("");

  //비밀번호 체크
  const [passwordCheck, setChagePasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setChagePasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  //약관동의
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.form_control}>
        <p>회원가입 페이지</p>
        <div>
          <label htmlFor="user-id">아이디</label>
          <input type="text" id="user-id" value={id} onChange={onchangeId} />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={onchangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <input
            type="password"
            id="user-password"
            value={password}
            onChange={onchangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-chk">비밀번호 확인</label>
          <input
            type="password"
            id="user-chk"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <p className={styles.error_text}>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
      </div>
      <div className={styles.chk}>
        <span>동의하십니까?</span>
        <input type="checkbox" checked={term} onChange={onChangeTerm} />
        {termError && <p className={styles.error_text}>약관에 동의해주세요</p>}
      </div>
      <div>
        <button>제출</button>
      </div>
    </form>
  );
};

export default SingupForm;
