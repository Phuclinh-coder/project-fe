import React, { useState, useEffect } from "react";
import axios from "axios";
import Image1 from "../../asset/image/News/image1.png";
import Image2 from "../../asset/image/News/image2.png";
import "../../asset/css/news.css";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    name: "CÂU LẠC BỘ ITC",
    title: "INFOMATION TECHNOLOGY CLUB",
    description:
      "Câu lạc bộ Tin học - ITC trực thuộc khoa Công nghệ thông tin Trường ĐH Kinh tế – Kỹ thuật Công nghiệp được thành lập và chính thức đi vào hoạt động từ 02/04/2013. Trải qua 10 năm hoạt động và phát triển, từ một CLB còn non trẻ hiện nay đã và đang ngày càng vững mạnh với đội ngũ các thành viên năng động và đầy nhiệt huyết.",
    thumbnail: Image1,
  },
  {
    id: 2,
    name: "TRỰC THUỘC ITC",
    title: "TRỰC THUỘC KHOA CNTT UNETI",
    description:
      "Cùng với sự đổi mới sáng tạo không ngừng, CLB hiện đang gồm 2 mảng hoạt động chính:- Mảng học tập bao gồm các nhóm học tập: Nhóm lập trình căn bản C++, Nhóm lập trình Hướng đối tượng, Nhóm lập trình Java, Nhóm thiết kế đồ họa, Nhóm quản trị mạng, Nhóm lập trình Website,...- Mảng tình nguyện gồm Đội tình nguyện ITVT với 5 ban chuyên môn chính: Ban Content, Ban Hình ảnh, Ban Nhân sự, Ban Media, Ban Hậu Cần. Với sứ mệnh tạo ra một môi trường lành mạnh và một sân chơi bổ ích, chúng tôi cùng những con người đam mê thử thách, tạo ra những giá trị tích cực cho cộng đồng thông qua những hoạt động tình nguyện và giảng dạy. Hãy gia nhập với chúng tôi ngay hôm nay.",
    thumbnail: Image2,
  },
];
function News() {
  return (
    <div className="News">
      <p className="title">TỔNG QUAN</p>
      {news.map((item) => (
        <Link to={`/news/${item.id}`} key={item.id} className="itemNews">
          <img className="imageNews" src={item.thumbnail} alt="error"></img>
          <div className="contentNews">
            <h1 className="nameNews">{item.name}</h1>
            <p className="titleNews">{item.title}</p>
            <span className="desNews">{item.description}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default News;
