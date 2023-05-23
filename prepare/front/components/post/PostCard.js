import Card from "../ui/Card";
import Comments from "./Comment";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import PostImages from "./PostImages";
import Avatar from "../ui/Avatar";
import { useCallback, useState } from "react";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [comment, setComment] = useState(false);
  const toggleComment = useCallback(() => {
    setComment((prev) => !prev);
  }, []);
  return (
    <>
      <Card>
        <Avatar post={post} id={id} />
        {post.Images[0] && <PostImages image={post.Images} />}
        <div>content들어오는 컴포넌트</div>
        <div>
          <button>북마크</button>
          <button>좋아요</button>
          <button onClick={toggleComment}>댓글</button>
        </div>
        {comment && (
          <>
            <CommentForm />
            <Comments post={post} />
          </>
        )}
      </Card>
    </>
  );
};

export default PostCard;
