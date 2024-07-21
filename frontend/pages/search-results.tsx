import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/search-results.module.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
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
      <div>
        <h3 style={{ marginTop: "8rem", marginLeft: "3rem" }}>
          Search Results
        </h3>
      </div>
      <div className={styles.contentBody}>
        <Row xs={1} md={3} className="g-4">
          {results.map((restaurant) => (
            <Col key={restaurant._id}>
              <RestaurantCard restaurant={restaurant} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
