import { Col } from "react-bootstrap";
import Blogpost from "../BlogPost/BlogPost";
import { useState, useEffect } from "react";
import { baseApiUrl } from "../../app/endpoints";
import { Post } from "../BlogPost/BlogPost";

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const username = "admin";
      const password = "atP0 Etwt yaNL XSVR UVFf Ng6w";
      const token = btoa(`${username}:${password}`);
      const headers = {
        Authorization: `Basic ${token}`,
      };

      const response = await fetch(`${baseApiUrl}/posts?_embed`, {
        headers: headers,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
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
