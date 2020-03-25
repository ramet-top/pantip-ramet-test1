import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";

const PantipReview = () => {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get("http://www.mocky.io/v2/5e1d227c3600002a00c73e82")
      .then(res => {
        // console.log(res.data.data);
        setNews(res.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h5>1.1 convert classComponent To hook (in code)</h5>
      </Container>

      <Container>
        <h5>
          1.2 Fetch Api = https://www.mocky.io/v2/5e1d227c3600002a00c73e82
        </h5>
      </Container>

      <hr />
      <Container>
        <Row>
          {news.map((n, i) => (
            <Col key={i}>
              <Card xs={2} md={4}>
                <Card.Img
                  width={171}
                  height={180}
                  variant="top"
                  src={n.image_url}
                  rounded="true"
                />
                <Card.Body>
                  <Card.Title>{n.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PantipReview;
