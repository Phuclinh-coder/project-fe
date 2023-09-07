import React from "react";
import Header from "../../header/header";
import Footer from "../../Footer/Footer";
import Newpost from "./NewPost";
import Carousel from "react-bootstrap/Carousel";
import ImageCour from "../../../asset/image/CourseItem/courjs.png";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "./Modal/Modal";
import { useState } from "react";
import "./courItem.css";

// Import Image:
import Cplusplus from "../../../asset/image/CourseItem/c++.jpg";
import Python from "../../../asset/image/CourseItem/python.png";
import Javascript from "../../../asset/image/CourseItem/courjs.png";
import Hd1 from "../../../asset/image/CourseItem/hd1.jpg";
import Hd2 from "../../../asset/image/CourseItem/hd2.jpg";
import Hd3 from "../../../asset/image/CourseItem/hd5.jpg";

const cardCour = [
  {
    id: 1,
    image: Cplusplus,
    name: "Khóa học C++",
  },
  {
    id: 2,
    image: Python,
    name: "Khóa học Python",
  },
  {
    id: 3,
    image: Javascript,
    name: "Khóa học Javascript",
  },
];
const cardActive = [
  {
    id: 1,
    image: Hd1,
    name: "Chương trình tri ân các anh hùng dân tộc",
  },
  {
    id: 2,
    image: Hd2,
    name: "Lễ bế giảng và trao bằng tốt nghiệp",
  },
  {
    id: 3,
    image: Hd3,
    name: "Nhóm lập trình Website",
  },
];
const demoItem = [
  {
    id: 1,
    nameCour: "Javascript",
    rating: 5,
    jobTeach: "Cựu sinh viên",
    nameTeach: "Nguyễn Văn A",
    content:
      "Khóa học JavaScript cơ bản sẽ hướng dẫn các bạn về một số kiến thức: Các kiểu dữ liệu, cú pháp cơ bản của JavaScript DOM và sự kiện trong JavaScriptAJAX và JSON trong JavaScript Thư viện và framework JavaScript",
    bonus:
      "Khóa học JavaScript cơ bản sẽ hướng dẫn các bạn về một số kiến thức: Các kiểu dữ liệu, cú pháp cơ bản của JavaScript DOM và sự kiện trong JavaScriptAJAX và JSON trong JavaScript Thư viện và framework JavaScript",
    link: "https://www.youtube.com/watch?v=1HakS7KsbCk",
  },
];
function CourItem() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Header />
      <div className="containerCour">
        <div className="post-and-cour">
          <Newpost item={cardCour} text="KHÓA HỌC LIÊN QUAN" circle={false} />
          <Newpost item={cardActive} text="BÀI VIẾT MỚI NHẤT" circle={true} />
        </div>
        <div className="bodyCour">
          <Carousel
            indicators={false}
            nextIcon={false}
            prevIcon={false}
            className="slideCour"
            interval={1500}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageCour}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageCour}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageCour}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="infoCour">
            {demoItem.map((item) => (
              <div key={item.id} className="bodyItem">
                <h1>{item.nameCour}</h1>
                <div className="rating">
                  <FaStar color="#ffc107" size="24" />
                  <FaStar color="#ffc107" size="24" />
                  <FaStar color="#ffc107" size="24" />
                  <FaStar color="#ffc107" size="24" />
                  <FaStar color="#ffc107" size="24" />
                </div>
                <Button
                  className="btn-singin"
                  variant="warning"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Đăng kí ngay
                </Button>{" "}
                <div className="lineAfter"></div>
                <h5
                  style={{ textDecoration: "underline", fontStyle: "italic" }}
                >
                  Người hướng dẫn
                </h5>
                <div className="teacher">
                  <p className="jobtea">{item.jobTeach}: </p>
                  <p className="nametea">{item.nameTeach}</p>
                </div>
                <h5
                  style={{ textDecoration: "underline", fontStyle: "italic" }}
                >
                  Nội dung khoá học
                </h5>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
          <div className="bonusCour">
            {demoItem.map((item) => (
              <div key={item.id}>
                <h5
                  className="info"
                  style={{ textDecoration: "underline", fontStyle: "italic" }}
                >
                  Thông tin bổ sung khoá học
                </h5>
                <span>{item.bonus}</span>
                <h5
                  className="info"
                  style={{ textDecoration: "underline", fontStyle: "italic" }}
                >
                  Giới thiệu ngôn ngữ {item.nameCour}
                </h5>
                <iframe
                  className="mobile-size"
                  width="100%"
                  height="420"
                  src="https://www.youtube.com/embed/1HakS7KsbCk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>

      <Footer />
    </div>
  );
}
export default CourItem;
