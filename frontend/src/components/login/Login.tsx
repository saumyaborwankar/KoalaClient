import React, { useState } from "react";
import { Form, Input, Button, Typography, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const onFinish = (values) => {
    console.log("Login form values:", values);
    // Handle login logic here
    setVisible(false);
  };

  // const showModal = () => {
  //   setVisible(true);
  // };

  const handleCancel = () => {
    setVisible(false);
    navigate("/");
  };

  return (
    <div>
      {/* <Button size="large" type="primary" onClick={showModal}>
        Login
      </Button> */}
      <Modal visible={visible} onCancel={handleCancel} footer={null}>
        <Title level={2}>Login</Title>
        <Form onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            Don't have an account?{" "}
            <Link to="/register" onClick={handleCancel}>
              Register here
            </Link>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
