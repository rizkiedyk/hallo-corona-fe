import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalSignUp(props) {
  return (
    <>
      <Modal show={props.showSignUp} onHide={props.handleCloseSignIUp} centered>
        <Modal.Title className="fw-bold d-flex justify-content-center py-5 fs-1">
          Sign Up
        </Modal.Title>
        <Modal.Body className="px-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Full Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">List As</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Patient</option>
                <option value="2">Doctor</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Gender</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Phone</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bold fs-5">Address</Form.Label>
              <Form.Control as="textarea" rows={3} style={{ resize: "none" }} />
            </Form.Group>
          </Form>
          <Button variant="light" className="w-100 button2 fw-bold fs-5">
            Sign up
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalSignUp;
