import { Col } from "react-bootstrap";
import Blogpost from "../BlogPost/BlogPost";
import { useState, useEffect } from "react";
function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      // Using fetch to fetch the posts
      const response = await fetch("http://headless-wordpress-website.local/wp-json/wp/v2/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      // Parsing the JSON response
      const data = await response.json();
      // Saving the data to state
      setPosts(data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error fetching posts:", error);
    }
  };

  // Calling the function on page load
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Col>{posts && posts.map((post) => <Blogpost post={post}></Blogpost>)}</Col>
    </>
  );
}

export default Home;
