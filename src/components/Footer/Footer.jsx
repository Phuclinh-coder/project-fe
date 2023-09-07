import React from "react";
import logo from "../../asset/image/Logocon.png";
import "../../asset/css/footer.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <div className="logo">
            <img src={logo} alt="error" width={250} height={65} />
          </div>
          <p className="param">
            {" "}
            Câu lạc bộ Tin học - ITC trực thuộc khoa Công nghệ thông tin Trường
            Đại học Kinh tế – Kỹ thuật Công nghiệp. Được thành lập và chính thức
            đi vào hoạt động từ 02/04/2013 với phương châm mới mẻ - năng động -
            sáng tạo. Hãy gia nhập với chúng tôi ngay hôm nay!
          </p>
        </div>
        <div className="col">
          <h3>
            VỀ CHÚNG TÔI{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>218 đường Lĩnh Nam, quận Hoàng Mai</p>
          <p className="email-id">lienchidoancnttuneti@gmail.com</p>
          <h4>+84 - 0123456789</h4>
        </div>
        <div className="col">
          <h3 className="h3-right">
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link className="goto" to={`/`}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link className="goto" to={`/`}>
                Hoạt động
              </Link>
            </li>
            <li>
              <Link className="goto" to={`/`}>
                Khóa học
              </Link>
            </li>
            <li>
              <Link className="goto" to={`/`}>
                Sự kiện
              </Link>
            </li>
            <li>
              <Link className="goto" to={`/`}>
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Newsletter{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form className="email-footer">
            <FaEnvelope className="icon-mail" />
            <input
              type="email"
              placeholder="Enter your email id"
              required
              className="input-footer"
            />
            <button type="submit">
              <FaArrowRight className="icon-right" color="white" />
            </button>
          </form>
          <div className="social-icons">
            <div className="fab">
              <Link
                className=""
                to={`https://www.facebook.com/InformationTechnologyClub.uneti`}
              >
                <FaFacebookF size={25} />
              </Link>
            </div>

            <div className="fab">
              <Link className="" to={`https://www.tiktok.com/@itc.uneti`}>
                <FaTiktok size={25} />
              </Link>
            </div>
          </div>
        </div>
        <hr></hr>
        <p className="copyright">Cau lac bo ITC @ 2021 - All Rights Reserved</p>
      </div>
    </footer>
  );
}
