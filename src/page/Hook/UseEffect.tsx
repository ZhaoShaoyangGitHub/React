import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";

function Test2() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(100);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("我来了");
    return () => {
      // eslint-disable-next-line no-console
      console.log("我走了");
    };
  }, []); // [], [count], [count,age]
  useEffect(() => {
    console.log("我又来了！！");
  });
  return (
    <Row style={{ paddingTop: "30px" }}>
      <Col span={3}>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          style={{ marginBottom: "20px" }}
        >
          点击
        </Button>
        <Button>加：{count}</Button>
      </Col>
      <Col span={3}>
        <Button
          onClick={() => {
            setAge(age - 1);
          }}
          style={{ marginBottom: "20px" }}
        >
          点击
        </Button>
        <Button>减：{age}</Button>
      </Col>
    </Row>
  );
}

export default Test2;
