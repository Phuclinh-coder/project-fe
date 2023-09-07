import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tkdh from "../../../asset/image/Contest/tkdh.jpg";
import "./newsItem.css";
function NavNews() {
  return (
    <Container className="nav-contest">
      <Row>
        <Col>
          <div className="nav_items">
            <img
              className="nav_image"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/332693565_3266409786837750_4585311153015214291_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=15Q8q7oQBmEAX8CGyT-&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA8rBTpQinrcYh8ZXegQ4ZSFgcHI677YZJYEGLBHJ5a7g&oe=644C6CD5"
              alt="error"
            ></img>
            <div className="info_news">
              <p className="name_news">Cuoc thi thiet ke do hoa</p>
              <div className="description_news">
                <p className="time_news">28 AUG, 2022</p>
                <p className="view_news"> 100 Views</p>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="nav_items">
            <img
              className="nav_image"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/340241820_153454477658899_4156421506680095406_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MYQCdaOcj6UAX-gzBAd&_nc_oc=AQniHklDluUWBqbl-axMf8oBsPLIBz_UbBDL9nwcDbCcSIWoUNavNW-HnCKtOMUAGu7RI6Dco3obHdMAJAnwy_Mi&_nc_ht=scontent.fhan2-5.fna&oh=00_AfANwZvLO5ZA8vADah2AGdP3M0m3ZFNgSENPOR8Ga3N8rw&oe=644B0853"
              alt="error"
            ></img>
            <div className="info_news">
              <p className="name_news">Cuộc thi Olympic tin học</p>
              <div className="description_news">
                <p className="time_news">12/03/2023</p>
                <p className="view_news"> 103 Views</p>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="nav_items">
            <img
              className="nav_image"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/313399803_501951175303914_6999945684947151857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=ksqV_l1Sls8AX9upPKG&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBTLl5yoqGXGXNfYGDi0IwkqSJ8cRaSqeujHPSTBjti0A&oe=644C32E6"
              alt="error"
            ></img>
            <div className="info_news">
              <p className="name_news">TOPCODER CONTEST 2023</p>
              <div className="description_news">
                <p className="time_news">15/02/2023</p>
                <p className="view_news"> 100 Views</p>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="nav_items">
            <img
              className="nav_image"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/330994927_871052617493154_7067510755070337522_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OkZg7dRb7voAX8RhpNg&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBEQZ6sRYCpc2mTFzWLR2cIvGJY9_olurX3qbT5lPZC0w&oe=644AB9C5"
              alt="error"
            ></img>
            <div className="info_news">
              <p className="name_news">Giải cầu lông sinh viên khoa CNTT</p>
              <div className="description_news">
                <p className="time_news">22/10/2022</p>
                <p className="view_news"> 100 Views</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NavNews;
