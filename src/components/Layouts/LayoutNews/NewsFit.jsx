import React, { useState, useEffect, useContext } from "react";
import Header from "../../header/header";
import Footer from "../../Footer/Footer";
import Newpost from "../LayoutCour/NewPost";
import "./newsItem.css";
// import '../LayoutCour/courItem.css'
import image1 from "../../../asset/image/Contest/image1.jpg";
import image2 from "../../../asset/image/Contest/image2.jpg";
import image3 from "../../../asset/image/Contest/image3.jpg";
import Cplusplus from "../../../asset/image/CourseItem/c++.jpg";
import Python from "../../../asset/image/CourseItem/python.png";
import Javascript from "../../../asset/image/CourseItem/courjs.png";
import Hd1 from "../../../asset/image/CourseItem/hd1.jpg";
import Hd2 from "../../../asset/image/CourseItem/hd2.jpg";
import Hd3 from "../../../asset/image/CourseItem/hd5.jpg";
import {
  FaCalendarAlt,
  FaChartBar,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { loginSelector } from "../../../redux/slice/login";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { dataContext } from "../../../client/screen/news2";
function NewsFit() {

  const newsfit = {
    title: "💥 [ RECAP: VÒNG CHUNG KẾT TOPCODER CONTEST 2023 ] 💥",
    time: " 26/04/2023",
    view: 361,
    image1,
    image2,
    image3,
  };
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
      image: Hd2,
      name: "Chương trình tri ân các anh hùng dân tộc",
    },
    {
      id: 2,
      image: Hd3,
      name: "Lễ bế giảng và trao bằng tốt nghiệp",
    },
    {
      id: 3,
      image: Hd1,
      name: "Nhóm lập trình Website",
    },
  ];

  return (
    <div>
      <Header />
      <div className="containerNews">
        <div className="mainNews">
          <h2>{newsfit.title}</h2>
          <div className="navNews">
            <div className="nav-left">
              <div className="nav-time">
                <FaCalendarAlt /> Ngày đăng: {newsfit.time}
              </div>
              <div className="nav-views">
                <FaChartBar /> Lượt xem: {newsfit.view}
              </div>
            </div>
            <div className="nav-right">
              <div className="fab">
                <FaFacebook size={25} />
              </div>
              <div className="fab">
                <FaTwitter size={25} />
              </div>
              <div className="fab">
                <FaWhatsapp size={25} />
              </div>
              <div className="fab">
                <FaPinterest size={25} />
              </div>
            </div>
          </div>
          <div className="text-body">
            <span>
              🚞 Vậy là chuyến hành trình mang tên "Topcoder Contest 2023" do
              Liên chi Đoàn Công nghệ thông tin - CLB Tin học ITC phối hợp tổ
              chức đã diễn ra thành công tốt đẹp với nhiều khoảnh khắc vô cùng
              đáng nhớ. ✨ Cảm ơn tất cả các bạn đã góp phần tạo nên thành công
              của cuộc thi năm nay. Chúng ta hãy cùng nhìn lại những khoảnh khắc
              đẹp trong ngày thi hôm nay nhé.
              <br></br>⏳ Nằm trong chuỗi hoạt động kỷ niệm 10 năm thành lập Câu
              lạc bộ Tin học & nhằm tạo ra một sân chơi bổ ích cho các bạn sinh
              viên K15 & K16, Liên chi Đoàn Khoa Công nghệ thông tin - Câu lạc
              bộ Tin học phối hợp tổ chức cuộc thi “TOPCODER CONTEST 2023”. 🎀
              Ban tổ chức Cuộc thi "Topcoder Contest 2023" xin trân trọng gửi
              lời cảm ơn tới Nhà tài trợ chính thức cuộc thi: 𝙈𝙞𝙣𝙙𝘾𝙝𝙖𝙞𝙣 𝘼𝙘𝙖𝙙𝙚𝙢𝙮.
            </span>
            <img
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/342515156_585890736939186_2896494742350478384_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=4RqTTvyIckoAX_Y0rU3&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCSsskxvDIoyfoN9H9qULLKQKQaZDGDsD47sk50fHT2sw&oe=644C9A1B"
              className="img-text-body"
              alt="error"
            ></img>
            <span>Các thành viên tham giam tại cơ sở Hà Nội</span>
            <img
              src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/342342399_135020502795652_5001386773534976681_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ey8SDyC5yIMAX9iOD2-&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAJHFyc5mCF9e-b3yHk12_EwV7jlyH4TnPduhRJy7kUgA&oe=644D5C00"
              className="img-text-body"
              alt="error"
            ></img>
            <span>Các thành viên tham giam tại cơ sở Nam Định</span>
          </div>
        </div>
        <div className="sliderNews">
          <Newpost item={cardCour} text="KHÓA HỌC LIÊN QUAN" circle={false} />
          <Newpost item={cardActive} text="BÀI VIẾT MỚI NHẤT" circle={true} />
          <Newpost item={cardActive} text="BÀI VIẾT MỚI NHẤT" circle={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsFit;
