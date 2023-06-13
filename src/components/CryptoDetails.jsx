import React, { useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { Select, Row, Col, Typography } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StarOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import millify from "millify";
import { useGetCrytpoDetailQuery } from "../services/cryptoApi";
import { useGetCryptoQuery } from "../services/cryptoApi";
const CryptoDetails = () => {
  const { Text, Title } = Typography;
  const { Option } = Select;
  const { coinId } = useParams();
  //const { data, isFetching } = useGetCrytpoDetailQuery(coinId);
  const [cryptoDetail, setCryptoDetail] = useState("cryptocurrency");
  const { data: cryptoData } = useGetCryptoQuery(100);
  //console.log(cryptoData);
  /*
  if(!isFetching){
    return ".......";
  }
  console.log(datas);*/
  return (
    <>
      <Col className="crypto-detail-container">
        <div className="crypto-detail-title">
          <Title level={3} className="crypto-title">
            Bitcoin (bitoin-btc) Price
          </Title>
          <p>
            Bitcoin live price in US dollars. View value statistics and market
            supply
          </p>
        </div>
        <div className="crypto-stats">
          <div>
            <Select
              showSearch
              className="select-news"
              placeholder="select a Crypto News"
              value={cryptoDetail}
              onChange={(value) => {
                setCryptoDetail(value);
              }}
            >
              <Option value="cryptocurrency">Cryptocurrency</Option>
              {cryptoData?.data?.coins?.map(({ rank, name }) => {
                return (
                  <Option value={name} key={rank}>
                    {rank}. {name}
                  </Option>
                );
              })}
            </Select>
          </div>
        </div>
        <Row justify="space-between">
          <Col xs={24} md={9} className="statistics-bitcoin">
            <Title level={2}>Bitcoin Level Statistics</Title>
            <Text>An overview showing the statistics of Bitcoin</Text>
            {[1, 2, 3, 4, 5]?.map((statistics) => {
              return (
                <Row
                  key={statistics}
                  justify="space-between"
                  align="middle"
                  className="nested-stats-row"
                >
                  <Col xs={8} md={6}>
                    <DollarCircleOutlined />
                    &nbsp;&nbsp;
                    <Text>Price To USD</Text>
                  </Col>
                  <Col xs={8} md={6}>
                    <p>$ 46.7K</p>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col xs={24} md={9}>
            <Title level={2}>Other Statistics</Title>
            <Text>An overview showing the statistics of Cryptocurrencies</Text>
            {[1, 2, 3, 4, 5]?.map((other__stats) => {
              return (
                <Row
                  key={other__stats}
                  justify="space-between"
                  align="middle"
                  className="nested-stats-row"
                >
                  <Col xs={10} md={9}>
                    <CheckOutlined />
                    &nbsp;&nbsp;
                    <Text>Number of markets</Text>
                  </Col>
                  <Col xs={10} md={9}>
                    <p>21553</p>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default CryptoDetails;
