import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ReservationForm() {
  return (
    <Container>
      <h2 className="fw-bold text-primary-color mt-5">
        Reservasi Consultation
      </h2>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label className="fw-bold">Full Name</Form.Label>
          <Form.Control type="text" className="bg-input-form" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label className="fw-bold">Phone</Form.Label>
          <Form.Control type="number" className="bg-input-form" />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicBornDate">
              <Form.Label className="fw-bold">Born Date</Form.Label>
              <Form.Control type="date" className="bg-input-form" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label className="fw-bold">Age</Form.Label>
              <Form.Control type="number" className="bg-input-form" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="formBasicHeight">
              <Form.Label className="fw-bold">Height</Form.Label>
              <Form.Control type="number" className="bg-input-form" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="formBasicWeight">
              <Form.Label className="fw-bold">Weight</Form.Label>
              <Form.Control type="number" className="bg-input-form" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label className="fw-bold">Gender</Form.Label>
          <Form.Select className="bg-input-form">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label className="fw-bold">Subject</Form.Label>
          <Form.Control type="text" className="bg-input-form" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label className="fw-bold">Live Consultation Date</Form.Label>
          <Form.Control type="date" className="bg-input-form" />
        </Form.Group>
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
          <button
            className="button2 fw-bold"
            style={{
              border: "none",
              color: "white",
              borderRadius: "10px",
              padding: "8px 90px",
            }}
          >
            Send
          </button>
        </Link>
      </Form>
    </Container>
  );
}
