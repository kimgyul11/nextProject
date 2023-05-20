import { useState } from "react";

export default (callbackFn) => {
  const [input, setInput] = useState("");
  const [touched, setIsTouched] = useState(false);

  const inputValid = callbackFn(input);
  const error = !inputValid && touched;

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setInput("");
    setIsTouched(false);
  };

  return {
    input,
    inputValid,
    error,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};
