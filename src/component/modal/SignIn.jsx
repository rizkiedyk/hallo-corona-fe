import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function ModalSignIn(props) {
  return (
    <>
      <Modal show={props.showSignIn} onHide={props.handleCloseSignIn} centered>
        <Modal.Title className="fw-bold d-flex justify-content-center py-5 fs-1">
          Sign In
        </Modal.Title>
        <Modal.Body className="px-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fs-5">Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
          <Button variant="light" className="w-100 button2 fw-bold fs-5">
            Sign up
          </Button>
          <div className="d-flex justify-content-center mt-3 w-100">
            <p className="text-secondary">
              Don't have an account? Click&nbsp;
              <Link
                to="#"
                onClick={props.switch}
                className="text-decoration-none text-secondary fw-bold"
              >
                Here
              </Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalSignIn;
