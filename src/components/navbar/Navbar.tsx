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
    <div>
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
    // <Menu
    //   style={{ fontSize: 24 }}
    //   mode={isInline ? "inline" : "horizontal"}
    //   items={[
    //     {
    //       label: "Home",
    //       key: "home",
    //     },
    //     {
    //       label: " About",
    //       key: "about",
    //     },
    //     {
    //       label: "Login",
    //       key: "login",
    //     },
    //   ]}
    // ></Menu>
    <div style={{ padding: "8px", margin: "10px" }}>
      <Space direction={isInline ? "vertical" : "horizonal"}>
        <Space>
          <Button type="primary">Primary</Button>
        </Space>
        <Space>
          <Button>Default</Button>
        </Space>
      </Space>
    </div>
  );
};
export default Navbar;
