import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddArticle() {
  return (
    <Container>
      <h2 className="fw-bold text-primary-color mt-5">Add Article</h2>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label className="fw-bold">Title</Form.Label>
          <Form.Control type="text" className="bg-input-form" />
        </Form.Group>
        <div className="col-md-4">
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label className="fw-bold">Image Thumbnail</Form.Label>
            <Form.Control type="file" className="bg-input-form" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            style={{ resize: "none" }}
            className="bg-input-form"
          />
        </Form.Group>
        <Link
          className="d-flex justify-content-center"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="light"
            className="button2 fw-bold"
            style={{
              padding: "8px 90px",
            }}
          >
            Post
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
