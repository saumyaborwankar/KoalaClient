import React, { useState } from "react";
import { Button, Drawer, Menu, Space } from "antd";
import "./Navbar.css";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";

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
            <Button size="large">About Me</Button>
          </Space>
          <Space>
            <Button size="large">Login</Button>
          </Space>
        </Space>
      </Space>
    </div>
  );
};
export default Navbar;
