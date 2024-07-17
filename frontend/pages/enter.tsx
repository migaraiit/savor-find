import { useState, useRef } from "react";
import { Carousel, Button } from "react-bootstrap";
// import { useRouter } from "next/router";
import styles from "../styles/enter.module.css";

const enterPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const mainPage = useRef<HTMLDivElement>(null);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleContinue = () => {
    mainPage.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.enterPage}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <img className="d-block w-100" src="/enter1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/enter2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/enter3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className={styles.content}>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and features</p>
        <Button variant="primary" size="lg" onClick={handleContinue}>
          Continue
        </Button>
      </div>
      <div ref={mainPage} className={styles.mainContent}>
        <h1>Welcome to the Main Content</h1>
        <p>This is the rest of your website content.</p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default enterPage;
