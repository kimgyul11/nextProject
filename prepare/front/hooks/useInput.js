import { useCallback, useState } from "react";

export default (intialstate = null) => {
  const [value, setValue] = useState(intialstate);
  const onChangeHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, onChangeHandler];
};
