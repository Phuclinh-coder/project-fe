import React, { useState, useEffect } from "react";
import "../../asset/css/cour.css";
import "../../asset/css/GlobleStyle.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "../../redux/slice/login";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Oop from "../../asset/image/Courses/Oop.jpg";
import Web from "../../asset/image/Courses/Web.jpg";
import Python from "../../asset/image/Courses/python.png";
function Cour() {
    const demoCourse = [
      {
        id: 1,
        img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/339069672_217346600880233_7795457486063575512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=chur320WHiUAX9iOYwo&_nc_ht=scontent.fhan2-5.fna&oh=00_AfClIlckCXczeeaOF3hYrJFLMR5dBTs1jNPDZ_X4or6BGw&oe=644B6514",
        nameCourse: "Lập trình JAVA",
        teacher: "Hà Đăng Huy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 2,
        img: Web,
        nameCourse: "Lập Trình Web",
        teacher: "Hải Long",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 3,
        img: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/334254786_249581654064201_6062261129525930721_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=QgIzvqFavIsAX9gyxKo&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBkfkJIPaCs3CuG3xu8TIfkhEHyZi-d0XVmhAsLXJk_3g&oe=644BAA1C",
        nameCourse: "Đồ họa ITC",
        teacher: "Phùng Trần Trung Nghĩa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 4,
        img: Python,
        nameCourse: "Lập trình với python",
        teacher: "Nguyễn Văn An",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 5,
        img: Oop,
        nameCourse: "Lập trình hướng đối tượng",
        teacher: "Vũ Thành Đạt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: 6,
        img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/315976912_518832606949104_8416891162987609159_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=JC5f6tKWZM4AX8t7u4m&_nc_ht=scontent.fhan2-5.fna&oh=00_AfD18-95FgNA_kdWMxDPzKdIgJ_kEgt4bt9EE9n1PyZBBA&oe=644C7C4D",
        nameCourse: "Quản trị mạng",
        teacher: "Hải Long",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ];
  
  const Course = demoCourse;
  return (
    <div className="Cour">
      <div className="Title">
        <p>CÁC KHÓA HỌC</p>
      </div>
      <div className="ListCourse">
        {Course.map((value) => (
          <div key={value.id} className="card">
            <Link to={`/cour/${value.id}`} style={{ textDecoration: "none" }}>
              <img
                className="img-top"
                src={value.img}
                alt="error"
                height={220}
              ></img>
              <div className="body-card">
                <h4 className="nameCour">{value.nameCourse}</h4>
                <div className="flex-teach">
                  <div className="teacher">
                    <p className="p1-teacher">Người dạy: </p>
                    <p className="p2-teacher">{value.teacher}</p>
                  </div>
                  <Link
                    className="btn-view"
                    to={`/cour/${value.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cour;
