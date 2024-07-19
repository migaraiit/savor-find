import React, { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import styles from "../styles/restaurantPage.module.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Link from "next/link";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";

interface Restaurant {
  _id: string;
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

const restaurantPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

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
        </Form>
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <h5>Filter</h5>
        </div>
        <div className={styles.contentBody}>
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
  );
};

export default restaurantPage;
