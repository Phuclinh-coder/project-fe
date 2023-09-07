import React from "react";
import "./modal.scss";
import Logo from '../../../../asset/image/CourseItem/courjs.png'
import PropTypes from 'prop-types'
import LeftImage from '../../../../asset/image/CourseItem/nen.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Modal({ setOpenModal }) {
  const handleSubmit = () =>{
    alert("CHÚC MỪNG BẠN ĐĂNG KÍ THÀNH CÔNG")
  }
  return (
    <div className="modalBackground overlay">
      <div className="modalContainer">
          <div className="btn-close" onClick={() => {setOpenModal(false)}}></div>
          <div className="img-left">
              <img src={LeftImage} alt="error"></img>
          </div>
          <div className="body-right">
              <div className="header-info">
                  <img src={Logo} alt="error" width={200} height={50}></img>
              </div>
              <h4>ĐĂNG KÍ KHÓA HỌC</h4>
              <Form>
                <Form.Group className="mb-3 size-input" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter Fullname" />
                </Form.Group>
                <Form.Group className="mb-3 size-input" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Enter Class" />
                </Form.Group>
                <Form.Group className="mb-3 size-input" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Enter ID Student" />
                </Form.Group>
                <Form.Group className="mb-3 size-input" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Enter Number Phone" />
                </Form.Group>
                <Form.Group className="mb-3 size-input" controlId="formBasicPassword">
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Button variant="primary btn-submit" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
          </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
    setOpenModal: PropTypes.bool.isRequired
}
export default Modal;