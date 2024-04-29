import { baseApiUrl } from "../../app/endpoints";
import { Button } from "react-bootstrap";
export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded: { "wp:featuredmedia": [{ source_url: string }] };
}

function Blogpost({ post }: { post: Post }) {
  const deletePost = async (id: number) => {
    try {
      const username = "admin";
      const password = "atP0 Etwt yaNL XSVR UVFf Ng6w";
      const token = btoa(`${username}:${password}`);
      const headers = {
        Authorization: `Basic ${token}`,
      };

      const response = await fetch(`${baseApiUrl}/posts/${id}`, {
        method: "DELETE",
        headers: headers,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
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
      <Button onClick={() => deletePost(post.id)}>DELETE</Button>
      <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="" className="mask" />
    </div>
  );
}

export default Blogpost;
