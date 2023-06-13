import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Card, Typography, Avatar, Select } from "antd";
import { useGetCryptoNewsApiQuery } from "../services/cryptoNewsApi";
import { useGetCryptoQuery } from "../services/cryptoApi";
import moment from "moment";

const News = ({ simplified }) => {
  const demo__Image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrkfpLUyLUVm8HPdnyi_ESTg3ib5cBFdMvA&usqp=CAU";
  const [crypto__news, setCrypto__news] = useState("Cryptocurrency");
  const abc = {
    newsCategory: crypto__news,
    count: simplified ? 6 : 20,
  };
  const { data: cryptoNews } = useGetCryptoNewsApiQuery(abc);
  const { data } = useGetCryptoQuery(100);

  //console.log(data);
  console.log(cryptoNews);
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select a Crypto News"
            onChange={(value) => {
              setCrypto__news(value);
            }}
          >
            <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
            {data?.data?.coins?.map((crypto__values) => {
              return (
                <Select.Option value={crypto__values?.name}>
                  {crypto__values?.name}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
      )}
      {cryptoNews?.value?.map((news, i) => {
        return (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news?.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Typography.Title level={4} className="news-title">
                    {news?.name}
                  </Typography.Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demo__Image}
                    className="img"
                    alt="news"
                  />
                </div>
                <p>
                  {news?.description.length > 100
                    ? `${news?.description.substring(0, 2000)}....`
                    : news?.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news?.provider[0]?.image?.thumbnail?.contentUrl ||
                        demo__Image
                      }
                      alt=""
                    />
                    <Typography.Text className="provider-name">
                      {news?.provider[0]?.name.length > 30
                        ? `${news?.provider[0]?.name.substring(0, 30)}...`
                        : `${news?.provider[0]?.name}`}
                    </Typography.Text>
                  </div>
                  <Typography.Text>
                    {moment(news?.datePublished).startOf("ss").fromNow()}
                  </Typography.Text>
                </div>
              </a>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default News;
