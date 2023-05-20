import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducers/post";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();

  const [text, setText] = useState("");
  const onchangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addPost);
    setText("");
  }, []);
  const onClickImageUpload = useCallback(
    (e) => {
      e.preventDefault();
      imageInput.current.click();
    },
    [imageInput.current]
  );
  return (
    <form onSubmit={onSubmit}>
      <section>
        <article>
          <textarea
            onChange={onchangeText}
            placeholder="오늘의 상태 입력"
            value={text}
          />
        </article>
        <article>
          <input type="file" multiple hidden ref={imageInput} />
          <button onClick={onClickImageUpload}>이미지 업로드</button>
          <button>등록</button>
        </article>
      </section>
      <div>
        {imagePaths.map((v) => (
          <div key={v}>
            <img src={v} alt={v} />
            <div>
              <button>제거</button>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default PostForm;
