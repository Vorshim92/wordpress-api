import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../app/actions/fetchPost";
import { Card, Col, Button } from "react-bootstrap";
import { Post } from "./BlogPost";

function Viewpost() {
  const dispatch = useAppDispatch();
  const { postId } = useParams();
  const post: Post = useAppSelector((state) => state.post.postData);

  useEffect(() => {
    if (postId) {
      dispatch(fetchPost(postId));
    }
  }, [postId]);

  return (
    <>
      <Col>
        <Card className="mt-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : ""} />
          <Card.Body>
            <Card.Title>{post.title.rendered}</Card.Title>
            <Card.Text dangerouslySetInnerHTML={{ __html: post.content.rendered }}></Card.Text>
            <Button variant="primary">MODIFICA</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Viewpost;
