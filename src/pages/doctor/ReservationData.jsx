import { Container, Table } from "react-bootstrap";

export default function ReservationData() {
  return (
    <Container>
      <h2 className="fw-bold text-primary-color mt-5">Reservasi Data</h2>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>User</th>
            <th>Subject</th>
            <th>Date of complaint</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Sakit Hati</td>
            <td>18 april 2022</td>
            <td style={{ color: "#0ACF83" }}>Waiting Live Consultant</td>
            <td>
              <img
                src="assets/img/Vectoractmale.png"
                alt="search"
                style={{ width: "20px" }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
