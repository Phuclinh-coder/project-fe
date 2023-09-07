import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import Olympic from "../../../asset/image/Contest/olympic.png";
import Thang11 from "../../../asset/image/Contest//thang11.jpg";
import Tkdh from "../../../asset/image/Contest/tkdh.jpg";
import "./newsItem.css";


const NewsInfo = [
  {
    id: 1,
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/332693565_3266409786837750_4585311153015214291_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=15Q8q7oQBmEAX8CGyT-&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA8rBTpQinrcYh8ZXegQ4ZSFgcHI677YZJYEGLBHJ5a7g&oe=644C6CD5",
    name: "Cuộc thi Olympic tin học",
    time: "12/03/2023",
    view: 103,
  },
  {
    id: 2,
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/340241820_153454477658899_4156421506680095406_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MYQCdaOcj6UAX-gzBAd&_nc_oc=AQniHklDluUWBqbl-axMf8oBsPLIBz_UbBDL9nwcDbCcSIWoUNavNW-HnCKtOMUAGu7RI6Dco3obHdMAJAnwy_Mi&_nc_ht=scontent.fhan2-5.fna&oh=00_AfANwZvLO5ZA8vADah2AGdP3M0m3ZFNgSENPOR8Ga3N8rw&oe=644B0853",
    name: "Cuộc thi TOPCODER CONTEST 2023",
    time: "15/02/2023",
    view: 103,
  },
  {
    id: 3,
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/313399803_501951175303914_6999945684947151857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=ksqV_l1Sls8AX9upPKG&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBTLl5yoqGXGXNfYGDi0IwkqSJ8cRaSqeujHPSTBjti0A&oe=644C32E6",
    name: "Cuộc thi THÁNG 11 TRI ÂN",
    time: "22/10/2022",
    view: 103,
  },
  {
    id: 4,
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/330994927_871052617493154_7067510755070337522_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OkZg7dRb7voAX8RhpNg&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBEQZ6sRYCpc2mTFzWLR2cIvGJY9_olurX3qbT5lPZC0w&oe=644AB9C5",
    name: "Giải cầu lông sinh viên khoa CNTT",
    time: "20/02/2023",
    view: 103,
  },
  {
    id: 5,
    image: Thang11,
    name: "Cuộc thi Tháng 11 tri ân",
    time: "12/10/2022",
    view: 103,
  },
  {
    id: 6,
    image: Tkdh,
    name: "Cuộc thi thiết kế đồ họa",
    time: "12/12/2022",
    view: 103,
  },
  // {
  //     id: 4,
  //     img: Mua,
  //     name: 'Cuộc thi múa',
  //     time: '12/10/2022',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  // },
];
function MainNews() {
  return (
    <div className="main_Content">
      <Container>
        <Row>
          <Col sm={9}>
            <Carousel indicators={false} controls={true} interval={1000}>
              <Carousel.Item>
                <div className="carou-item">
                  <img
                    className="d-block w-100 h-100"
                    src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/340241820_153454477658899_4156421506680095406_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MYQCdaOcj6UAX8Suuko&_nc_oc=AQkYOY9mOU5JiCW0t9TAz0PkzXrG79PzEYP4GfEo_XQwqE9Fqc_PKzw8w5sHlTjTNAvPf7foiMy9ofUk8v67uv1Z&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAfsIeOhX5mK4GqoZbEwKeRpIOL45GKcFKLjcG7rEcj8w&oe=644D0293"
                    alt="First slide"
                  ></img>
                  <h1 className="main_name">
                    💐[ THÔNG BÁO CHÍNH THỨC KHỞI ĐỘNG TOPCODER CONTEST 2023 ]💐{" "}
                  </h1>
                  <p className="des_news">
                    Nằm trong chuỗi hoạt động kỷ niệm 10 năm thành lập Câu lạc
                    bộ Tin học & nhằm tạo ra một sân chơi bổ ích cho các bạn
                    Sinh viên K15 & K16 Khoa Công nghệ thông tin có niềm đam mê
                    với ngành Lập trình và tạo cơ hội ứng dụng kiến thức đã học
                    vào thực tế cũng như tạo môi trường cho các bạn sinh viên
                    trong khoa giao lưu học hỏi lẫn nhau để nâng cao chất lượng
                    và thể hiện được năng lực, sự sáng tạo của mình.{" "}
                  </p>
                </div>
              </Carousel.Item>
              {/* <Carousel.Item>
                    <div className='carou-item'>
                            <img className='d-block w-100' src={Thang11} alt='First slide'></img>
                            <h1 className='main_name'>Lorem ipsum dolor sit amet, consectetur iscing elit. pharetra magna. </h1>
                            <p className='des_news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='carou-item'>
                            <img className='d-block w-100' src={Tkdh} alt='First slide'></img>
                            <h1 className='main_name'>Lorem ipsum dolor sit amet, consectetur iscing elit. pharetra magna. </h1>
                            <p className='des_news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. </p>
                        </div>
                    </Carousel.Item> */}
            </Carousel>
          </Col>
          <Col sm={3} className="Bonus_new">
            <h5>
              <FaCircle size={16} /> CÁC CUỘC THI __________
            </h5>
            {NewsInfo.map((item) => (
              <div key={item.id} className="slider_news">
                <h1 style={{ width: "10%" }}>{item.id}.</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                  }}
                >
                  <p className="name_slider">{item.name}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingRight: 30,
                      fontSize: 16,
                    }}
                  >
                    <p>{item.time}</p>
                    <p>{item.view} Views</p>
                  </div>
                </div>
                <img className="image_news" src={item.image} alt="error"></img>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainNews;
