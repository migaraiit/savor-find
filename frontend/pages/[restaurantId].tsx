import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import styles from "../styles/[restaurantId].module.css";

interface Restaurant {
  // _id: string;
  name: string;
  description: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
  hours: Record<string, string>;
  reviews: Array<{ user: string; comment: string; rating: number }>;
  priceRange: string;
}

interface Review {
  user: string;
  comment: string;
  rating: number;
}

const RestaurantDetails: React.FC = () => {
  const router = useRouter();
  const { restaurantId } = router.query;
  const [restaurant, setRestaurant] = React.useState<Restaurant | null>(null);

  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = { user, comment, rating };

    const response = await fetch(
      `http://localhost:3000/restaurant/${restaurantId}/review`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(review),
      }
    );
    router.reload();
  };

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await fetch(
        `http://localhost:3000/restaurant/${restaurantId}`
      );
      const data = await response.json();
      setRestaurant(data);
    };
    fetchRestaurant();
  }, [restaurantId]);

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
      <div style={{ display: "flex", justifyContent: "-moz-initial" }}>
        <div style={{ marginLeft: "2rem", marginTop: "2rem" }}>
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src="restaurant.jpg" />
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                {restaurant?.name}
              </Card.Title>
              <Card.Text>{restaurant?.description}</Card.Text>
              <Card.Text>
                Cuisine type: <b>{restaurant?.cuisineType}</b>
              </Card.Text>
              <Card.Text>
                Location: <b>{restaurant?.location}</b>
              </Card.Text>
              <Card.Text>
                Rating: <b>{restaurant?.rating}</b>
              </Card.Text>
              <Card.Text>
                Phone Number: <b>{restaurant?.phoneNumber}</b>
              </Card.Text>
              <Card.Text>
                Price Range: <b>{restaurant?.priceRange}</b>
              </Card.Text>
              <Card.Text>
                Opening Hours:
                {restaurant?.hours ? (
                  <ul>
                    {Object.entries(restaurant?.hours).map(([day, hours]) => (
                      <li key={day}>
                        <span style={{ textTransform: "capitalize" }}>
                          {day}
                        </span>
                        : {hours}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.userReviews}>
          <h3>User Reviews</h3>
          {restaurant?.reviews ? (
            restaurant.reviews.map((review, index) => (
              <div key={index}>
                <Card
                  style={{
                    width: "20rem",
                    marginBottom: "1rem",
                    borderRadius: "20px",
                    borderColor: "green",
                  }}
                >
                  <Card.Body>
                    <Card.Title>{review.user}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{review.comment}</ListGroup.Item>
                      <ListGroup.Item>Rating: {review.rating}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>No reviews yet!</p>
          )}
          <Form onSubmit={handleSubmit}>
            <Card
              style={{
                width: "20rem",
                marginBottom: "1rem",
                borderRadius: "20px",
                borderColor: "green",
              }}
            >
              <Card.Body>
                <Card.Title>Leave a Review</Card.Title>
                <Card.Text>
                  <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Your Name"
                    style={{ marginBottom: "1rem" }}
                  />
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Your Review"
                    style={{ marginBottom: "1rem" }}
                  />
                  <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(Number)}
                    placeholder="Rating"
                  />
                  <Button
                    variant="success"
                    style={{ marginTop: "1rem" }}
                    type="submit"
                  >
                    Submit Review
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
