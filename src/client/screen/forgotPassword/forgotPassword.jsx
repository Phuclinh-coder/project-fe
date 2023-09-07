import React from "react";
import './forgotPassword.css'
import '../../../asset/css/util.css';
import { AiOutlineMail } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"



function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (

        <div className="container-forgot">
            <div className="form-login wrap-login100 wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54" >
                <div className="login100-form " >

                    <form className="login-body validate-form" onSubmit={handleSubmit(onSubmit)} >
                        <div className="login-title login100-form-title p-b-49">
                            <h3>Quên mật khẩu</h3>
                        </div>
                        <div className="form-control login-input wrap-input100 validate-input m-t-23 " data-validate="Password is reauired">
                            <span className="label-input label-input100">Vui lòng nhập email để tìm kiếm tài khoản của bạn.</span>
                            <div className="input-field">
                                <AiOutlineMail className="input-icon"></AiOutlineMail>
                                <input
                                    id="email"
                                    className="input100 inputpass"
                                    type="email"
                                    autoComplete="off"
                                    placeholder="Vui lòng điền email"
                                    name="email"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                ></input>
                                <span className="focus-input100"></span>

                            </div>


                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <div className="error-container">
                                {errors.email?.type === "required" && <li>Vui lòng nhập email</li>}
                                {errors.email?.type === "pattern" && <li>Email không hợp lệ</li>}
                            </div>

                        )}
                        <div className="container-login100-form-btn p-t-10" >
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn"   >
                                    Khôi phục mật khẩu
                                </button>
                            </div>
                        </div>

                    </form>
                    <div className="flex-col-c p-t-30">
                        

                        <Link to="/" className="txt2 w-100">
                            Về trang chủ
                        </Link>


                    </div>



                </div>
            </div>

        </div>


    )

}

export default ForgotPassword;
