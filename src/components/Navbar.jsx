import React, { useState, useEffect, useContext } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
//import { operationCreateContext } from "../App";
import icon from "../images/cryptocurrency.png";
import { myContext } from "../App";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  // const { logic, add, subtraction } = useContext(operationCreateContext);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const { ahsan, ijk, xyz } = useContext(myContext);
  console.log(ahsan);
  return (
    <>
      {/*
      <h1 style={{ color: "#fff" }}>
        {typeof ahsan} {ahsan} {ahsan.length}
      </h1>
      <button onClick={() => ijk([1, 2, 3, 4, 5, 6, 7])}>IJK</button>
      <button onClick={() => xyz([8, 9, 10, 11, 12, 13, 14, 15])}>XYZ</button>*/}
      {/*
    <h1 style={{color:"#fff"}}>{typeof logic} {logic}</h1>
    <button onClick={add}>Addition</button>
    <button onClick={subtraction}>subtraction</button>*/}
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
          <Button
            className="menu-control-container"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        </div>
        {activeMenu && (
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
              <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </>
  );
};

export default Navbar;
