import React, { useState, useEffect, createContext } from "react";
import { useSelector } from "react-redux";
import { loginSelector } from "../../redux/slice/login";
import { useNavigate, useLocation } from "react-router-dom";
import "../../asset/css/new2.scss";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsFit from "../../components/Layouts/LayoutNews/NewsFit";

export const dataContext = createContext();
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function NEW2() {
  const user = useSelector(loginSelector.currentUser);
  const token = useSelector(loginSelector.currentToken);
  const [datanews, setDataNews] = useState([]);
  useEffect(() => {
    const getNewData = async () => {
      await axios
        .get("https://large-waves-production.up.railway.app/home/news", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          setDataNews(res.data);
        });
    };
    getNewData();
  }, []);
  // console.log(datanews);
  datanews.reverse();

  return (
    <div>
      <div className="container-new2">
        <div className="header-new-top">
          <h1 className="new2-title">HOẠT ĐỘNG</h1>
        </div>
        <div className="header-new-body">
          <Carousel responsive={responsive} className="slider-news">
            {datanews.map((item) => (
              <div key={item.id}>
                <a href={`/news/${item.id}`} className="slider-card-news">
                  <Card className="new-card">
                    <Card.Img
                      className="new-card-image"
                      variant="top"
                      src={item.thumbnail}
                    />
                    <Card.Body className="new-card-body">
                      <Card.Title className="new-card-title">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="new-card-more">Xem thêm</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default NEW2;
