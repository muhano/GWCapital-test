import { Container, Form, Card, Nav, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [featured, setFeatured] = useState("headphone");
  
  

  return (
    <Container>
      <h5>Hi, Andrea</h5>
      <h3>What are you looking for today</h3>
      <Form.Control
        className="mt-4"
        type="text"
        placeholder="Search Headphone"
      />

      <Card className="mt-3">
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#headphone">
            <Nav.Item>
              <Nav.Link
                onClick={() => setFeatured("headphone")}
                href="#headphone"
              >
                Headphone
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => setFeatured("headbands")}
                href="#headbands"
              >
                Headbands
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setFeatured("earpads")} href="#earpads">
                Earpads
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        {featured === "headphone" && (
          <Row className="no-gutters" style={{ maxWidth: "40rem" }}>
            <Col>
              <Card.Body>
                <Card.Title>TMA-2 Modular Headphone</Card.Title>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Col>
            <Col xs={6}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80"
                style={{ width: "100%", height: "20rem", objectFit: "cover" }}
              />
            </Col>
          </Row>
        )}
        {featured === "headbands" && (
          <Row className="no-gutters" style={{ maxWidth: "40rem" }}>
            <Col>
              <Card.Body>
                <Card.Title>TMA-3 Comfy Headbands</Card.Title>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Col>
            <Col xs={6}>
              <Card.Img
                variant="top"
                src="https://sc04.alicdn.com/kf/HTB1OHqwX_HuK1RkSndVq6xVwpXab.jpg"
                style={{ width: "100%", height: "20rem", objectFit: "cover" }}
              />
            </Col>
          </Row>
        )}
        {featured === "earpads" && (
          <Row className="no-gutters" style={{ maxWidth: "40rem" }}>
            <Col>
              <Card.Body>
                <Card.Title>TMA-1 Black Earpads</Card.Title>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Col>
            <Col xs={6}>
              <Card.Img
                variant="top"
                src="https://sc02.alicdn.com/kf/HTB1hO_CbjLuK1Rjy0Fhq6xpdFXaP/228395599/HTB1hO_CbjLuK1Rjy0Fhq6xpdFXaP.jpg_.webp"
                style={{ width: "100%", height: "20rem", objectFit: "contain" }}
              />
            </Col>
          </Row>
        )}
      </Card>

      <Row className="mt-5">
        <Col xs={11}>
          <h5>Featured Products</h5>
        </Col>
        <Col xs={1}>
          <h6>
            <Link to={"#"}>see all</Link>
          </h6>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <Card className="h-100" style={{ maxWidth: "25rem" }}>
            <Link to={"/details/1"}>
              <Card.Img
                style={{ width: "100%", height: "15vw", objectFit: "contain" }}
                variant="top"
                src="https://sc04.alicdn.com/kf/HTB1OHqwX_HuK1RkSndVq6xVwpXab.jpg"
              />
            </Link>
            <Card.Body>
              <Card.Title>TMA-3 Comfy Headbands</Card.Title>
              <Card.Text>USD 350</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ maxWidth: "25rem" }}>
            <Link to={"/details/2"}>
              <Card.Img
                style={{ width: "100%", height: "15vw", objectFit: "contain" }}
                variant="top"
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80"
              />
            </Link>
            <Card.Body>
              <Card.Title>TMA-2 Modular Headphone</Card.Title>
              <Card.Text>USD 400</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Home;
