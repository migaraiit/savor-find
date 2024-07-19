import React, { useState, useRef, useEffect } from "react";
import { Carousel, Button, Nav } from "react-bootstrap";
import styles from "../styles/enter.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Spacer from "../components/Spacer";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

const EnterPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const mainPageRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState<"hidden" | "auto">("hidden");

  useEffect(() => {
    return () => {};
  }, [overflow]);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleContinue = () => {
    if (mainPageRef.current) {
      mainPageRef.current.scrollIntoView({ behavior: "smooth" });
      setOverflow("auto");
    }
  };

  return (
    <div className={styles.enterPage}>
      <Navbar className={styles.navbar} fixed="top">
        <Container>
          <Navbar.Brand href="#home" className={styles.brand}>
            SavorFind
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#pricing">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <img className="d-block w-100" src="/enter1.jpg" alt="First slide" />
          <img className="d-block w-100" src="/enter1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/enter2.jpg" alt="Second slide" />
          <img className="d-block w-100" src="/enter1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/enter3.jpg" alt="Third slide" />
          <img className="d-block w-100" src="/enter1.jpg" alt="First slide" />
        </Carousel.Item>
      </Carousel>
      <div className={styles.content}>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and features</p>
        <Button variant="primary" size="lg" onClick={handleContinue}>
          Continue
        </Button>
      </div>

      <Spacer />
      <div
        ref={mainPageRef}
        // className={styles.mainContent}
        style={{ overflow: overflow }}
      >
        <div className={styles.mainContent}>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className={styles.searchBox}
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
        <div>
          <div className={styles.popularTopic}>
            <h2>Popular Now</h2>
            <Link href="/restaurantPage">
              <h6>see all</h6>
            </Link>
          </div>
          <div className={styles.carouselSection}>
            <Carousel>
              <Carousel.Item className={styles.carouselSlide}>
                <img
                  className={styles.popularCarouselCard}
                  src="/enter1.jpg"
                  alt="First slide"
                />
                <img
                  className={styles.popularCarouselCard}
                  src="/enter1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/enter2.jpg"
                  alt="Second slide"
                />
                <img
                  className="d-block w-100"
                  src="/enter1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/enter3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPage;
