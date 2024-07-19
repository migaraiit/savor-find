import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import { Container, Carousel, Col } from "react-bootstrap";

interface Restaurant {
  _id: string;
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

const testPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

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

  return (
    <Container>
      <Carousel>
        {restaurants.map((restaurant) => (
          <Carousel.Item
            key={restaurant._id}
            style={{ alignContent: "center" }}
          >
            <RestaurantCard restaurant={restaurant} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default testPage;
