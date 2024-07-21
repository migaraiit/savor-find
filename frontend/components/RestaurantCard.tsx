import { useRouter } from "next/router";
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
// Rest of the code remains unchanged

interface Restaurant {
  _id: string;
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${restaurant._id}`);
  };
  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "2rem",
        borderWidth: "2px",
        boxShadow: "-moz-initial",
      }}
    >
      <Card.Img variant="top" src="/restaurant.jpg" />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cuisine: {restaurant.cuisineType}</ListGroup.Item>
        <ListGroup.Item>Location: {restaurant.location} in</ListGroup.Item>
        <ListGroup.Item>Rating: {restaurant.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ alignSelf: "center" }}>
        <Button variant="outline-warning" onClick={handleClick}>
          Review
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;

// const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
//   return (
//     <Card>
//       <Card.Body>
//         <Card.Title>{restaurant.name}</Card.Title>
//         <Card.Text>
//           <strong>Location:</strong> {restaurant.location}
//         </Card.Text>
//         <Card.Text>
//           <strong>Cuisine:</strong> {restaurant.cuisineType}
//         </Card.Text>
//         <Card.Text>
//           <strong>Rating:</strong> {restaurant.rating}
//         </Card.Text>
//         <Card.Text>
//           <strong>Phone:</strong> {restaurant.phoneNumber}
//         </Card.Text>
//       </Card.Body>
//     </Card>
