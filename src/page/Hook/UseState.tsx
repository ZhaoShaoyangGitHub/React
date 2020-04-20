import React, { useState } from "react";
import { Button, Row, Col } from "antd";

function Test1() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("shaoyang");
  return (
    <Row style={{ paddingTop: "30px" }}>
      <Col span={3}>
        <Button
          onClick={() => {
            return setAge(age + 1);
          }}
          style={{ marginBottom: "20px" }}
        >
          Click me
        </Button>
        <Button>年龄: {age}</Button>
      </Col>
      <Col span={3}>
        <Button
          onClick={() => {
            return setName("zhaoshaoyang");
          }}
          style={{ marginBottom: "20px" }}
        >
          Click me
        </Button>
        <Button>姓名: {name}</Button>
      </Col>
    </Row>
  );
}

export default Test1;
