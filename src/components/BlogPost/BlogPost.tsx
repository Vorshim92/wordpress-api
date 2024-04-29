export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded: { "wp:featuredmedia": [{ source_url: string }] };
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
      <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="" className="mask" />
    </div>
  );
}

export default Blogpost;
