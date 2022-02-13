import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Nav, Row, Card, Col } from "react-bootstrap";

function Details() {
  let params = useParams();
  const [productData, setProductData] = useState({});
  const [statusTab, setStatusTab] = useState("overview");
  const [loading, setLoading] = useState(true)

  let productImages = [];
  for (let i = 0; i < 3; i++) {
    productImages.push(productData.image);
  }

  useEffect(() => {
    if (params.id === "1") {
      setProductData({
        image: "https://sc04.alicdn.com/kf/HTB1OHqwX_HuK1RkSndVq6xVwpXab.jpg",
        price: "350",
        name: "TMA-3 Comfy Headbands",
        parts: [
          {
            image:
              "https://media.sweetwater.com/api/i/q-82__ha-cef6beb1d4346a2c__hmac-f55420be6c15348caa8ff24f229b12e7c2509c98/images/items/750/Pro8HEx-large.jpg",
            title: "Donec sit amet eleifend ante",
            description:
              "Donec dapibus et ligula nec vulputate. Vivamus quis nisi elit. Integer eleifend pretium ultricies.",
          },
          {
            image:
              "https://sc01.alicdn.com/kf/HTB1PsQoVwTqK1RjSZPhq6xfOFXau/228395599/HTB1PsQoVwTqK1RjSZPhq6xfOFXau.jpg_.webp",
            title: "Nam dictum in ipsum ut mollis",
            description:
              "Nulla gravida diam mauris, et viverra lacus porta et. Donec commodo sapien vitae pretium lacinia",
          },
        ],
        reviews: [
          {
            name: "Madelina",
            comment:
              "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pharetra dapibus augue, in dignissim nibh fringilla quis. Ut gravida egestas faucibus.",
          },
          {
            name: "Irfan",
            comment:
              "Cras mattis eu est in tempor. Donec metus elit, feugiat in mi ut, vulputate ultricies metus.",
          },
          {
            name: "Ravi putra",
            comment:
              "Praesent vel felis varius, dapibus dui in, tempus nibh. Nullam non porttitor turpis, tincidunt commodo lectus.",
          },
        ],
      });
      setLoading(false)
    } else if (params.id === "2") {
      setProductData({
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80",
        price: "400",
        name: "TMA-2 Modular Headphone",
        parts: [
          {
            image:
              "https://media.sweetwater.com/api/i/q-82__ha-cef6beb1d4346a2c__hmac-f55420be6c15348caa8ff24f229b12e7c2509c98/images/items/750/Pro8HEx-large.jpg",
            title: "Donec sit amet eleifend ante",
            description:
              "Donec dapibus et ligula nec vulputate. Vivamus quis nisi elit. Integer eleifend pretium ultricies.",
          },
          {
            image:
              "https://sc01.alicdn.com/kf/HTB1PsQoVwTqK1RjSZPhq6xfOFXau/228395599/HTB1PsQoVwTqK1RjSZPhq6xfOFXau.jpg_.webp",
            title: "Nam dictum in ipsum ut mollis",
            description:
              "Nulla gravida diam mauris, et viverra lacus porta et. Donec commodo sapien vitae pretium lacinia",
          },
        ],
        reviews: [
          {
            name: "Madelina",
            comment:
              "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pharetra dapibus augue, in dignissim nibh fringilla quis. Ut gravida egestas faucibus.",
          },
          {
            name: "Irfan",
            comment:
              "Cras mattis eu est in tempor. Donec metus elit, feugiat in mi ut, vulputate ultricies metus.",
          },
          {
            name: "Ravi putra",
            comment:
              "Praesent vel felis varius, dapibus dui in, tempus nibh. Nullam non porttitor turpis, tincidunt commodo lectus.",
          },
        ],
      });
      setLoading(false)
    }
  }, []);

  // console.log(productData.parts, '<------------------------------------------------');

  if (loading) {
    return (
      <Container>
        <h3>
          Loading...
        </h3>
      </Container>
    )
  }

  return (
    <Container>
      <h5 style={{ color: "green" }}>USD {productData.price}</h5>
      <h3>{productData.name}</h3>
      <Nav variant="tabs" defaultActiveKey="#overview">
        <Nav.Item>
          <Nav.Link onClick={() => setStatusTab("overview")} eventKey="#overview">
            Overview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setStatusTab("features")} eventKey="#features">
            Features
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => setStatusTab("specification")}
            eventKey="#specification"
          >
            Specification
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {statusTab === "overview" && (
        <div>
          <Row className="mt-3">
            {productImages.map((images, index) => (
              <Col key={index}>
                <Card className="h-100" style={{ maxWidth: "25rem" }}>
                  <Card.Img
                    style={{
                      width: "100%",
                      height: "15vw",
                      objectFit: "contain",
                    }}
                    variant="top"
                    src={images}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <h5 className="mt-3">Review</h5>
          <Col className="mt-3">
            {productData.reviews.map((review) => (
              <Row key={review.name}>
                <h5>{review.name}</h5>
                <p>{review.comment}</p>
              </Row>
            ))}
          </Col>
        </div>
      )}

      {statusTab === "features" && (
        <div className="mt-3">
          <h5>Highly Detailed Audio</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
            neque id nisl aliquam dignissim. Suspendisse potenti. Nunc efficitur
            nunc ut rhoncus dignissim. Donec at libero nec lectus pharetra
            maximus non non nisl. Vivamus massa nibh, ullamcorper ornare arcu
            nec, elementum suscipit metus. Donec ac felis tortor. Nunc eget
            pellentesque purus, vel dignissim augue.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Quisque non metus non lacus ullamcorper
            congue nec quis metus. Fusce tempor vitae purus id ultricies.
            Phasellus a convallis urna. Suspendisse id iaculis orci.
            Pellentesque faucibus leo vel leo porta bibendum. Donec ut dictum
            elit, sit amet dictum nisi.
          </p>

          <Col>
            {productData.parts.map((part) => (
              <Row key={part.image}>
                <Card className="mb-3" style={{ width: "40rem" }}>
                  <Row className="no-gutters">
                    <Col xs={5}>
                      <Card.Img
                        style={{
                          width: "100%",
                          height: "15vw",
                          objectFit: "cover",
                        }}
                        variant="top"
                        src={part.image}
                      />
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>{part.title}</Card.Title>
                        <Card.Text>{part.description}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Row>
            ))}
          </Col>
        </div>
      )}
    </Container>
  );
}

export default Details;
