import React, { useReducer, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space, Row, Col } from "antd";
import {
  Cryptocurrencies,
  News,
  Navbar,
  CryptoDetails,
  Homepage,
  Exchanges,
} from "./components";
import "./App.css";
/*
const value = [1, 2, 3, 4, 5, 6, 7];
export const operationCreateContext = createContext();*/
const abc = [];
export const myContext = createContext();
const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const first = (state, action) => {
    let result;
    switch (action.type) {
      case "IJK":
        result = [...action.payload, `ahsan jawed ${action.type}`];
        state = result
        console.log(state);
      case "XYZ":
        result = [...action.payload, `ahsan jawed ${action.type}`];
        state = result;
        console.log(state);
        console.log(result);
      default:
        return state;
        break;
    }
  };
  const [ahsan, dispatch] = useReducer(first, abc);
  const ijk = (id) => {
    dispatch({ type: "IJK", payload: id });
  };
  const xyz = (id) => {
    dispatch({ type: "XYZ", payload: id });
  };
  const finale = {
    ahsan: ahsan,
    ijk: ijk,
    xyz: xyz,
  };
  /*
    const First = (state, action) => {
      let output;
      switch (action.type) {
        case "ADD":
          output = state.reduce((acc, currVal) => acc + currVal, 0);
          return `the addition is ${output}`;
        case "SUBTRACTION":
          output = state.reduce((acc, currVal) => acc - currVal, 0);
          return `the subtraction is ${output}`;
        default:
          console.log("Error 404");
      }
    };
    const [logic, dispatch] = useReducer(First, value);
    const add = () => {
      dispatch({ type: "ADD" });
    };
    const subtraction = () => {
      dispatch({ type: "SUBTRACTION" });
    };
    let abc = {
      logic: logic,
      add: add,
      subtraction: subtraction,
    };
  */
  return (
    <>
      <div className="app">
        <div className="navbar">
          {/*
          <operationCreateContext.Provider value={abc}>
            <Navbar />
          </operationCreateContext.Provider>
          */}
          <myContext.Provider value={finale}>
            <Navbar />
          </myContext.Provider>
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Copyright © 2021
              <Link to="/"> Cryptoverse Inc. By Ahsan Jawed</Link>
              <br />
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
