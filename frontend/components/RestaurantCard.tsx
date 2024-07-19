import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

interface Restaurant {
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "2rem" }}>
      <Card.Img variant="top" src="/enter1.jpg" />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cuisine: {restaurant.cuisineType}</ListGroup.Item>
        <ListGroup.Item>Location: {restaurant.location} in</ListGroup.Item>
        <ListGroup.Item>Ratingd: {restaurant.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Review</Button>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;

// import React from "react";
// import { Card } from "react-bootstrap";

// interface Restaurant {
//   _id: string;
//   name: string;
//   location: string;
//   cuisineType: string;
//   rating: number;
//   phoneNumber: string;
// }

// interface RestaurantCardProps {
//   restaurant: Restaurant;
// }

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
//   );
// };

// export default RestaurantCard;
