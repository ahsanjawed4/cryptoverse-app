import React, { useState, useEffect } from "react";
import { useGetExchangesQuery } from "../services/cryptoApi";
import { Row, Col, Collapse, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
const Exchanges = () => {
  const { data: exchanges } = useGetExchangesQuery();
  const [checkValue, setCheckValue] = useState([]);
  //const coin__exchanges = exchanges?.data?.coins;
  const { Title, Text } = Typography;
  const { Panel } = Collapse;
  //console.log(exchanges);
  useEffect(() => {
    setCheckValue(exchanges?.data?.coins);
    const checking__condition = exchanges?.data?.coins?.filter((check) => {
      return check?.numberOfMarkets > 5;
    });
    setCheckValue(checking__condition);
  }, [exchanges]);
  return (
    <>
      <Row className="exchange__heading">
        <Col span={6}>
          <Title level={5}>Exchanges</Title>
        </Col>
        <Col span={6}>
          <Title level={5}>Price</Title>
        </Col>
        <Col span={6}>
          <Title level={5}>Markets</Title>
        </Col>
        <Col span={6}>
          <Title level={5}>btcPrice</Title>
        </Col>
      </Row>
      <Row>
        {checkValue?.map((exchange) => {
          return (
            <Col span={24} key={exchange?.uuid}>
              <Collapse>
                <Panel
                  showArrow={false}
                  header={
                    <div className="exchanges__row" key={exchange?.uuid}>
                      <div>
                        <Text>{exchange?.rank}. </Text>
                        <Avatar src={exchange?.iconUrl} />
                        &nbsp;&nbsp;&nbsp;
                        <Text>{exchange?.name}</Text>
                      </div>
                      <div>{millify(exchange?.price)}</div>
                      <div>{millify(exchange?.numberOfMarkets)}</div>
                      <div>{millify(exchange?.btcPrice)}</div>
                    </div>
                  }
                >
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </Panel>
              </Collapse>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
{
  /*
      <Row>
        <Col span={24}>
          <Collapse>
            <Panel
              showArrow={false}
              header={(
                <Row>
                  <Col span={6} style={{background:"green"}}>Ahsan One</Col>
                  <Col span={6}>Ahsan One</Col>
                  <Col span={6}>Ahsan One</Col>
                  <Col span={6}>Ahsan One</Col>
                </Row>
              )}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Panel>
          </Collapse>
        </Col>
      </Row>
              */
}

export default Exchanges;
