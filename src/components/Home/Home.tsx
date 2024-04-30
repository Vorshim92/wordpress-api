import { Col } from "react-bootstrap";
import Blogpost from "../BlogPost/BlogPost";
import { useEffect } from "react";
import { Post } from "../BlogPost/BlogPost";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPosts } from "../../app/actions/fetchPost";

function Home() {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.postsData);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <>
      {posts &&
        posts.map((post: Post) => (
          <Col xs={2} key={post.id}>
            <Blogpost post={post} />
          </Col>
        ))}
    </>
  );
}

export default Home;
