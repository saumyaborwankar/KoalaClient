import React, { useState } from "react";
import { Button, Drawer, Menu, Space } from "antd";
import "./Navbar.css";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="navbar">
      <div style={{}} className="menuIcon">
        <MenuOutlined
          style={{ padding: "8px", fontSize: 24, alignItems: "center" }}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </div>
      <span className="headerMenu">
        <NavbarMenu />
      </span>

      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(!openMenu);
        }}
        closable={true}
      >
        <NavbarMenu isInline />
      </Drawer>
    </div>
  );
};

const NavbarMenu = ({ isInline = false }) => {
  let navigate = useNavigate();
  return (
    <div>
      <Space
        direction={isInline ? "vertical" : "horizonal"}
        className="space-container-3"
      >
        <Space>
          <Button type="primary" size="large">
            Koala
          </Button>
        </Space>

        <Space
          direction={isInline ? "vertical" : "horizonal"}
          className="space-container-2"
        >
          <Space>
            <Button size="large" onClick={() => navigate("/aboutme")}>
              About Me
            </Button>
          </Space>
          <Space>
            <Button size="large" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button size="large" onClick={() => navigate("/register")}>
              Register
            </Button>
            {/* <Login /> */}
            {/* <Register /> */}
          </Space>
        </Space>
      </Space>
    </div>
  );
};
export default Navbar;
