interface Post {
  id: number;
  title: string;
  content: string;
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
      <h2 className="blog-title">TITOLO</h2>
      <p className="blog-excerpt" dangerouslySetInnerHTML={{ __html: "post.excerpt.rendered" }} />
      <img src="" className="mask" />
    </div>
  );
}

export default Blogpost;
