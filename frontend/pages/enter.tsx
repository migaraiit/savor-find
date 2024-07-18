import React, { useState, useRef, useEffect } from "react";
import { Carousel, Button, Nav } from "react-bootstrap";
import styles from "../styles/enter.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Spacer from "../components/Spacer";

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
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/enter2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/enter3.jpg" alt="Third slide" />
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
        className={styles.mainContent}
        style={{ overflow: overflow }}
      >
        <h1>Welcome to the Main Content</h1>
        <p>This is the rest of your website content.</p>
        <h1>Welcome to the Main Content</h1>

        {/* Add more content here */}
      </div>
    </div>
  );
};

export default EnterPage;
