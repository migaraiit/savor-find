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
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";

interface Restaurant {
  _id: string;
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

const EnterPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const mainPageRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState<"hidden" | "auto">("hidden");
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const router = useRouter();

  const handleSearch = (keyword: string) => {
    router.push(`/search-results?keyword=${encodeURIComponent(keyword)}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/restaurant")
      .then((response) => {
        console.log("Fetched Data:", response.data); // Log fetched data
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the restaurants!", error);
      });
  }, []);

  useEffect(() => {
    console.log("Updated Restaurants State:", restaurants);
  }, [restaurants]);

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
        <h1>Welcome</h1>
        <p>
          Our platform brings you genuine reviews and ratings from food
          enthusiasts just like you. Whether you're looking for a cozy café, a
          trendy bistro, or a luxurious fine dining restaurant, we've got you
          covered.
        </p>
        <Button variant="primary" size="lg" onClick={handleContinue}>
          Get Started Now
        </Button>
      </div>

      <Spacer />
      <div
        ref={mainPageRef}
        // className={styles.mainContent}
        style={{ overflow: overflow }}
      >
        <div className={styles.mainContent}>
          <div>
            <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
              Browse through thousands of restaurant profiles and find the
              perfect spot for any occasion.
            </h3>
          </div>
          <div>
            {/* Search for restaurants by name, cuisine type, location, and more. */}
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <div
          style={{
            width: "80vh",
            padding: "1rem",
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            margin: "auto",
          }}
        >
          <div className={styles.popularTopic}>
            <h2>Popular Now</h2>
            <Link href="/restaurantPage">
              <h6>see all</h6>
            </Link>
          </div>
          <div className={styles.carouselSection}>
            <Carousel
              style={{
                width: "auto",
                margin: "auto",
              }}
              controls={true}
            >
              {restaurants.map((restaurant) => (
                <Carousel.Item
                  key={restaurant._id}
                  style={{ alignContent: "center" }}
                >
                  <RestaurantCard restaurant={restaurant} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPage;
