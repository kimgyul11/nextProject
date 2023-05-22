import Card from "../ui/Card";
import Comments from "./Comment";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  console.log(id, post.User.id);

  return (
    <div>
      <Card>
        {post.User.id === id ? (
          <>
            <button>수정</button>
            <button>삭제</button>
          </>
        ) : (
          <button>신고</button>
        )}
        {post.Images[0] && <PostImages image={post.Images} />}
        <div>content들어오는 컴포넌트</div>
        <button>좋아요 버튼</button>
        <CommentForm />
        <Comments />
      </Card>
    </div>
  );
};

export default PostCard;
