import Card from "../ui/Card";
import Comments from "./Comment";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import PostImages from "./PostImages";
import Avatar from "../ui/Avatar";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);

  return (
    <>
      <Card>
        <Avatar post={post} id={id} />

        {post.Images[0] && <PostImages image={post.Images} />}
        <div>content들어오는 컴포넌트</div>
        <button>좋아요 버튼</button>
        <CommentForm />
        <Comments />
      </Card>
    </>
  );
};

export default PostCard;
