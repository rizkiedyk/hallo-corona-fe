import { Container, Card } from "react-bootstrap";

function DetailArticleComponent() {
  return (
    <Container>
      <h1 className="mt-5">Ini alasan kenapa buah dicuci</h1>
      <p>17 April 2020</p>
      <p>
        Author : <span className="text-primary-color">Dr.Malika</span>
      </p>
      <Card className="py-5 shadow my-5 border-0">
        <Card.Img
          variant="top"
          src="/assets/img/thumbnail.png"
          className="mx-auto rounded-0"
          style={{ width: "85%", height: "30%" }}
        />
        <Card.Body className="mx-auto" style={{ width: "85%" }}>
          <Card.Title className="mt-3">
            <p className="category px-3 py-1 rounded-pill">Corona Virus</p>
          </Card.Title>
          <Card.Text className="mt-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default DetailArticleComponent;
