import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageCour from "../../../asset/image/CourseItem/courjs.png";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "./courItem.css";
export default function BodyCour() {
  // const demoItem = [
  //   {
  //     id: 1,
  //     nameCour: 'Javascript',
  //     rating: 5,
  //     jobTeach: 'Cựu sinh viên',
  //     nameTeach: 'Nguyễn Văn A',
  //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
  //   }
  // ]
  return (
    <div className="bodyCour">
      <Carousel className="slideCour" interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={ImageCour} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImageCour} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImageCour} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="infoCour">
        <h2>Javascript</h2>
        <div>
          <FaStar color="#ffc107" />
          <FaStar color="#ffc107" />
          <FaStar color="#ffc107" />
          <FaStar color="#ffc107" />
          <FaStar color="#ffc107" />
        </div>
        <Button className="btn-singin" variant="warning">
          Đăng kí ngay
        </Button>{" "}
        <h4>Người hướng dẫn</h4>
        <div className="teacher">
          <p>Cựu sinh viên: </p>
          <p> Nguyễn Văn A</p>
        </div>
        <h4>Nội dung khóa học</h4>
        <span>
          Khóa học JavaScript cơ bản sẽ hướng dẫn các bạn về một số kiến thức:
          Các kiểu dữ liệu, cú pháp cơ bản của JavaScript DOM và sự kiện trong
          JavaScript AJAX và JSON trong JavaScript Thư viện và framework
          JavaScript
        </span>
      </div>
    </div>
  );
}
