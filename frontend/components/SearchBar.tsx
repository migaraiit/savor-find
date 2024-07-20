import React, { use } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../styles/restaurantPage.module.css";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={keyword}
    //     onChange={(e) => setKeyword(e.target.value)}
    //     placeholder="Search products..."
    //   />
    //   <button type="submit">Search</button>
    // </form>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={styles.searchBar}
          />
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-success"
            type="submit"
            className={styles.button}
          >
            Find
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;

{
  /* <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
                className={styles.searchBar}
              />
            </Col>
            <Col xs="auto">
                <Button
                  variant="outline-success"
                  type="submit"
                  className={styles.button}
                >
                  Find
                </Button>
              </Col>
          </Row>
        </Form> */
}
