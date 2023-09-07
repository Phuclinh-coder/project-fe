import React, { useState, useEffect } from "react";
import "./Login.css";
import "../../../asset/css/util.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "@material-design-icons/font";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import path from "../../../utils/path/path";
import * as apis from "../../../apis/index.api";
import axios from "axios";
import { loginActions } from "../../../redux/slice/login";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Eyes = () => {
    const inputpass = document.querySelector(".inputpass");
    const eyesOpen = document.querySelector(".eyes-open");
    const eyesClose = document.querySelector(".eyes-close");
    eyesOpen.addEventListener("click", function () {
      eyesOpen.classList.add("hidden");
      eyesClose.classList.remove("hidden");
      inputpass.setAttribute("type", "password");
    });
    eyesClose.addEventListener("click", function () {
      eyesOpen.classList.remove("hidden");
      eyesClose.classList.add("hidden");
      inputpass.setAttribute("type", "text");
    });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function loginApp() {
    const data = await axios
      .post("https://large-waves-production.up.railway.app/api/auth/login", {
        username,
        password,
      })
      .then(function (data) {
        dispatch(loginActions.login(data.data.accessToken));
        dispatch(loginActions.setUser(data.data));
        if (data.data.roles.includes("ROLE_ADMIN")) {
          swal({
            title: "Đăng nhập thành công",
            text: "",
            icon: "success",
            button: "OK",
          }).then(() => {
            navigate("/admin");
          });
        } else {
          swal({
            title: "Đăng nhập thành công",
            text: "",
            icon: "success",
            button: "OK",
          }).then(() => {
            navigate("/");
          });
        }
      })
      .catch(function (error) {
        swal({
          title: "Đăng nhập không thành công",
          text: "Sai tên tài khoản hoặc mật khẩu",
          icon: "error",
          button: "OK",
        });
      });
  }

  return (
    <div className="container-register">
      <div className="form-login wrap-login100 wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <div className="login100-form validate-form">
          <form className="login-body validate-form" onSubmit={handleSubmit()}>
            <div className="login-title login100-form-title p-b-30">
              <h3>Đăng nhập</h3>
            </div>
            <div
              className="form-control login-input wrap-input100 validate-input m-t-23"
              data-validate="Username is reauired"
            >
              <span className="label-input label-input100">Tên đăng nhập</span>
              <div className="input-field">
                <AiOutlineUser className="input-icon"></AiOutlineUser>
                <input
                  id="username"
                  className="input100"
                  type="text"
                  autoComplete="off"
                  name="username"
                  placeholder="Nhập tên đăng nhập"
                  {...register("name", { required: true, minLength: 4 })}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <span className="focus-input100"></span>
                <small></small>
              </div>
            </div>
            {Object.keys(errors).length !== 0 && (
              <div className="error-container">
                {errors.name?.type === "required" && (
                  <li>Vui lòng nhập username</li>
                )}
                {errors.name?.type === "minLength" && (
                  <li>Username không hợp lệ</li>
                )}
              </div>
            )}

            <div
              className="form-control login-input wrap-input100 validate-input m-t-23 "
              data-validate="Password is reauired"
            >
              <span className="label-input label-input100">Mật khẩu</span>
              <div className="input-field">
                <AiOutlineLock className="input-icon"></AiOutlineLock>
                <input
                  id="password"
                  className="input100 inputpass"
                  type="password"
                  autoComplete="off"
                  placeholder="Nhập mật khẩu"
                  name="password"
                  {...register("password", { required: true, minLength: 4 })}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <span className="focus-input100"></span>
                <div className="icon-eye" onClick={Eyes}>
                  <BsFillEyeSlashFill className="icon-eyes eyes-close"></BsFillEyeSlashFill>
                  <IoEyeSharp className="icon-eyes eyes-open hidden"></IoEyeSharp>
                </div>
              </div>
            </div>
            {Object.keys(errors).length !== 0 && (
              <div className="error-container">
                {errors.password?.type === "required" && (
                  <li>Vui lòng nhập password</li>
                )}
                {errors.password?.type === "minLength" && (
                  <li>Password không hợp lệ</li>
                )}
              </div>
            )}
            <div className="text-right  p-b-10">
              <Link to="/forgot" className="forgot-password">
                Quên mật khẩu?
              </Link>
            </div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={loginApp}>
                  Đăng nhập
                </button>
              </div>
            </div>
          </form>

          <div className="txt1 text-center  p-t-30 p-b-20">
            <span>Hoặc đăng nhập bằng</span>
          </div>
          <div className="flex-c-m">
            <a href="#" className="login100-social-item bg1">
              <FaFacebook></FaFacebook>
            </a>

            <a href="#" className="login100-social-item bg3">
              <FaGoogle></FaGoogle>
            </a>
          </div>
          <div className="flex-col-c p-t-50">
            <span className="txt1 p-b-17">Chưa có tài khoản ?</span>

            <Link to="/register" className="txt2">
              Đăng kí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
