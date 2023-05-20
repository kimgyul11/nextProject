import styles from "./SignupForm.module.css";
import useForm from "../hooks/useForm";

const SingupForm = () => {
  //ID
  const {
    input: id,
    inputValid: enteredIdIsValid,
    error: idInputHasError,
    onChangeHandler: idChangeHandler,
    onBlurHandler: idBlurHandler,
    reset: idInputReset,
  } = useForm((value) => value.trim() !== "");
  //nickname
  const {
    input: nickname,
    inputValid: enteredNicknameIsValid,
    error: nicknameInputHasError,
    onChangeHandler: nicknameChangeHandler,
    onBlurHandler: nicknameBlurHandler,
    reset: nicknameInputReset,
  } = useForm((value) => value.trim() !== "");
  //PASSWORD
  const {
    input: password,
    inputValid: enteredPasswordIsValid,
    error: passwordHasError,
    onChangeHandler: passwordChangeHandler,
    onBlurHandler: passwordBlurHandler,
    reset: passwordInputReset,
  } = useForm((value) => value.trim() !== "");
  //PASSWORD CHECK
  const {
    input: passwordCheck,
    inputValid: enteredPasswordChkIsValid,
    error: passwordChkHasError,
    onChangeHandler: passwordChkChangeHandler,
    onBlurHandler: passwordChkBlurHandler,
    reset: passwordChkInputReset,
  } = useForm((value) => value === password);

  //input form체크
  let formValidCheck = false;
  if (
    enteredPasswordIsValid &&
    enteredPasswordChkIsValid &&
    enteredNicknameIsValid &&
    enteredIdIsValid
  ) {
    formValidCheck = true;
  }
  //submit이벤트
  const onsumitHandler = (e) => {
    e.preventDefault();
    if (!formValidCheck) {
      console.log("불량확인");
      return;
    }
    console.log(id, nickname, password);
    idInputReset();
    nicknameInputReset();
    passwordInputReset();
    passwordChkInputReset();
  };

  //유효성검사 styles
  const idInputStyles = idInputHasError
    ? `${styles.form_control} ${styles.invalid}`
    : styles.form_control;
  const passwordInputStyles = passwordHasError
    ? `${styles.form_control} ${styles.invalid}`
    : styles.form_control;
  const passwordChkInputStyles = passwordChkHasError
    ? `${styles.form_control} ${styles.invalid}`
    : styles.form_control;
  const nicknameInputStyles = nicknameInputHasError
    ? `${styles.form_control} ${styles.invalid}`
    : styles.form_control;

  return (
    <div className={styles.container}>
      <form onSubmit={onsumitHandler}>
        <p>회원가입 페이지</p>
        <div className={idInputStyles}>
          <label htmlFor="id">아이디(필수)</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={idChangeHandler}
            onBlur={idBlurHandler}
          />
          {idInputHasError && (
            <p className={styles.error_text}>아이디를 확인해주세요</p>
          )}
        </div>
        <div className={nicknameInputStyles}>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={nicknameChangeHandler}
            onBlur={nicknameBlurHandler}
          />
          {nicknameInputHasError && (
            <p className={styles.error_text}>닉네임을 확인해주세요</p>
          )}
        </div>
        <div className={passwordInputStyles}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={styles.error_text}>비밀번호 확인해주세요</p>
          )}
        </div>
        <div className={passwordChkInputStyles}>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input
            type="password"
            id="passwordCheck"
            value={passwordCheck}
            onChange={passwordChkChangeHandler}
            onBlur={passwordChkBlurHandler}
          />
          {passwordChkHasError && (
            <p className={styles.error_text}>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
        <div>
          <button>제출</button>
        </div>
      </form>
    </div>
  );
};

export default SingupForm;
