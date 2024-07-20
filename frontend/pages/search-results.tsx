import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/search-results.module.css";
import { Col, Row } from "react-bootstrap";
import RestaurantCard from "../components/RestaurantCard";

interface Restaurant {
  _id: string;
  name: string;
  location: string;
  cuisineType: string;
  rating: number;
  phoneNumber: string;
}

export default function SearchResults() {
  const router = useRouter();
  const { keyword } = router.query;
  const [results, setResults] = useState<Restaurant[]>([]);

  useEffect(() => {
    if (keyword) {
      fetchResults(keyword as string);
    }
  }, [keyword]);

  const fetchResults = async (searchKeyword: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/restaurant/search?keyword=${encodeURIComponent(
          searchKeyword
        )}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className={styles.contentBody}>
      <Row xs={1} md={3} className="g-4">
        {results.map((restaurant) => (
          <Col key={restaurant._id}>
            <RestaurantCard restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
