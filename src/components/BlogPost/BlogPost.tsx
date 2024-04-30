import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../app/hooks";
import { deletePost } from "../../app/actions/deletePost";
import { fetchPosts } from "../../app/actions/fetchPost";
import { Link } from "react-router-dom";
export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded: { "wp:featuredmedia": [{ source_url: string }] };
}

function Blogpost({ post }: { post: Post }) {
  const dispatch = useAppDispatch();

  const handleOnDelete = async () => {
    await deletePost(post.id);
    dispatch(fetchPosts);
  };

  return (
    <div className="blog-container">
      <p className="blog-date">
        {new Date(Date.now()).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <h2 className="blog-title">{post.title.rendered}</h2>
      <p className="blog-excerpt" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <Button className="btn-danger" onClick={handleOnDelete}>
        DELETE
      </Button>
      <Link className="" to={`/post/${post.id}`}>
        <Button className="btn-primary"> VISUALIZZA </Button>
      </Link>
      <img src={post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : ""} alt="" className="mask" />
    </div>
  );
}

export default Blogpost;
