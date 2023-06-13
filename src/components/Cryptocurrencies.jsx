import React, { useState, useEffect } from "react";
import { useGetCryptoQuery } from "../services/cryptoApi";
import { HomeOutlined, AppleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Card, Input, Divider, Avatar } from "antd";
import millify from "millify";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
  const [crypto, setCrypto] = useState([]);
  const [searchCrypto, setsearchCrypto] = useState("");
  useEffect(() => {
    const filterSearch = cryptoList?.data?.coins.filter((item) => {
      return item.name.toLowerCase().includes(searchCrypto);
    });
    setCrypto(filterSearch);
  }, [cryptoList, searchCrypto]);
  if (isFetching) {
    return "......";
  }
  /*
  const looping = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];*/
  return (
    <>
      {/* 
      <Row gutter={[32, 32]} style={{ marginBottom: "40px" }}>
        {looping.slice(0, count).map((l) => {
          return (
            <Col xs={24} sm={12} md={8}>
              <Card title="Ahsan jawed" extra={l} hoverable key={l}>
                <Typography.Title
                  level={1}
                  style={{ textAlign: "center", marginBottom: "20px" }}
                >
                  Welcome to the Show
                </Typography.Title>
              </Card>
            </Col>
          );
        })}
      </Row>*/}
      {!simplified && (
        <div className="search-crypto">
          <Typography.Title
            level={2}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Top {count} Crytpocurrencies
          </Typography.Title>
          <Input
            placeholder="search cryptocurrencies"
            value={searchCrypto}
            onChange={(e) => {
              setsearchCrypto(e.target.value.toLowerCase());
            }}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((cryptos) => {
          return (
            <Col xs={24} sm={12} lg={6} className="" key={cryptos?.rank}>
              <Link key={cryptos?.rank} to={`/crypto/${cryptos?.rank}`}>
                <Card
                  title={`${cryptos?.rank}.  ${cryptos?.name}`}
                  extra={
                    <img className="crypto-image" src={cryptos?.iconUrl} />
                  }
                  hoverable
                >
                  <p>Price: {millify(cryptos?.price)}</p>
                  <p>Market Cap: {millify(cryptos?.marketCap)}</p>
                  <p>Change: {cryptos?.change}%</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
