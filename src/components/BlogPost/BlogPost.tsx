export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

function Blogpost({ post }: { post: Post }) {
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
      <img src="" className="mask" />
    </div>
  );
}

export default Blogpost;
