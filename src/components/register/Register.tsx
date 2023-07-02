import React, { useState } from "react";
import { Form, Input, Button, Typography, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const Register = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const onFinish = (values) => {
    console.log("Register form values:", values);
    // Handle register logic here
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
      {/* <Button type="primary" onClick={showModal}>
        Register
      </Button> */}
      <Modal visible={visible} onCancel={handleCancel} footer={null}>
        <Title level={2}>Register</Title>
        <Form onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password />
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Already have an account?{" "}
            <Link to="/login" onClick={handleCancel}>
              Login here
            </Link>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Register;
