import React, { useState, useEffect } from "react";
import "../../../../asset/css/postadmin.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Slidebar from "../../../../components/admin/slidebar/slidebar";
import Navbar from "../../../../components/admin/navbar/navbar";
import { loginSelector } from "../../../../redux/slice/login";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function PostAdmin() {
  const token = useSelector(loginSelector.currentToken);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState();
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("content", content);
    formData.append("file", file);

    console.log(formData);
    const data = await axios
      .post(
        "https://large-waves-production.up.railway.app/api/news/create",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (data) {
        swal({
          title: "Đăng bài thành công!",
          text: "",
          icon: "success",
          button: "OK",
        });
      })
      .catch(function (error) {
        console.log(error);
        swal({
          title: "Đăng bài không thành công!",
          text: "",
          icon: "error",
          button: "OK",
        });
      });
  };

  return (
    <div className="admin-post">
      <div>
        <h1 className="admin-post-title">Đăng bài</h1>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Tiêu đề: </Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Nhập tiêu đề"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                placeholder="Mô tả bài viết"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Tải hình ảnh lên</Form.Label>
              <Form.Control
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <CKEditor
              editor={Editor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              type="button"
              className="post-admin-button"
              onClick={() => handleSubmit()}
            >
              Đăng ngay
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default PostAdmin;
