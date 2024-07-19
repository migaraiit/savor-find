import React from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import styles from "../styles/restaurantPage.module.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const restaurantPage = () => {
  return (
    <div>
      <div className={styles.searchBox}>
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className={styles.searchBar}
              />
            </Col>
            <Col xs="auto">
              <Button
                variant="outline-success"
                type="submit"
                className={styles.button}
              >
                Find
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <h5>Filter</h5>
        </div>
        <div className={styles.contentBody}>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src="/enter1.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default restaurantPage;
