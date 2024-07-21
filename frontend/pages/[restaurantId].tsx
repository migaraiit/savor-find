import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface Restaurant {
  // _id: string;
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

const RestaurantDetails: React.FC = () => {
  const router = useRouter();
  const { restaurantId } = router.query;
  const [restaurant, setRestaurant] = React.useState<Restaurant | null>(null);

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
      <h1>{restaurant?.name}</h1>
      <p>Location: {restaurant?.location}</p>
      <p>Cuisine Type: {restaurant?.cuisineType}</p>
      <p>Rating: {restaurant?.rating}</p>
      <p>Phone Number: {restaurant?.phoneNumber}</p>
    </div>
  );
};

export default RestaurantDetails;
