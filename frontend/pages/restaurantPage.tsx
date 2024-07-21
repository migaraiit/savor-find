import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import styles from "../styles/restaurantPage.module.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Link from "next/link";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";
import router, { useRouter } from "next/router";

interface Restaurant {
  _id: string;
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

interface RestaurantSearch {
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

const restaurantPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const router = useRouter();

  const handleSearch = (keyword: string) => {
    router.push(`/search-results?keyword=${encodeURIComponent(keyword)}`);
  };

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  const handleMinValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = parseInt(event.target.value);
    setMinValue(newMinValue * 0.1);
  };

  const handleMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = parseInt(event.target.value);
    setMaxValue(newMaxValue * 0.1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/restaurant")
      .then((response) => {
        console.log("Fetched Data:", response.data); // Log fetched d
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the restaurants!", error);
      });
  }, []);

  useEffect(() => {
    console.log("Updated Restaurants State:", restaurants);
  }, [restaurants]);

  return (
    <div>
      <div>
        <Navbar className={styles.navbar} fixed="top">
          <Container style={{}}>
            <Navbar.Brand href="/enter" className={styles.brand}>
              SavorFind
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="/">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className={styles.searchBox}>
        <SearchBar onSearch={handleSearch} />
        {/* <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className={styles.searchBar}
              />
            </Col>
            <Col xs="auto">
              <Link href="/testPage">
                <Button
                  variant="outline-success"
                  type="submit"
                  className={styles.button}
                >
                  Find
                </Button>
              </Link>
            </Col>
          </Row>
        </Form> */}
      </div>

      <div className={styles.body}>
        <div className={styles.sidebar}>
          <div>
            <h5>Sort by</h5>
            <Form style={{ paddingLeft: "1rem", marginBottom: "1rem" }}>
              {/* {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check label={`highest rating`} id={``} />
              </div>
            ))} */}
              <Form.Check
                type="radio"
                label="Highest Rating"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              ></Form.Check>
              <Form.Check
                type="radio"
                label="Lowest Rating"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form>
          </div>
          <div>
            <h5>Filter by</h5>
          </div>
          <div style={{ paddingLeft: "1rem" }}>
            <Form>
              <Form.Check
                type="checkbox"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                label="Rating"
              ></Form.Check>
            </Form>
            <Form.Label>Min {minValue.toFixed(1)}</Form.Label>
            <Form.Range
              name="minValue"
              value={minValue * 10}
              onChange={handleMinValue}
              min={0}
              max={50}
              // step={}
            />
            <Form.Label>Max {maxValue.toFixed(1)}</Form.Label>
            <Form.Range
              name="maxValue"
              value={maxValue * 10}
              onChange={handleMaxValue}
              min={0}
              max={50}
            />
          </div>
        </div>
        <div className={styles.contentBody}>
          <div></div>
          <div>
            <h2 style={{ marginBottom: "2rem" }}>Restaurants</h2>
            <Row xs={1} md={3} className="g-4">
              {restaurants.map((restaurant) => (
                <Col key={restaurant._id}>
                  <RestaurantCard restaurant={restaurant} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      {/* <div>
        <h1>Product Search</h1>
        <SearchBar onSearch={handleSearch} />
        <ul>
          {searchResults.map((product) => (
            <h3>{product.name}</h3>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default restaurantPage;
