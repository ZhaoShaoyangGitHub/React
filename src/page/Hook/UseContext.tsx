import React, { useState, useContext, createContext } from "react";
import { Button, Row, Col } from "antd";
export const CountContext: any = createContext("默认名称");

function Counter() {
  const count: any = useContext(CountContext);
  return (
    <div>
      <Button>子组件{count}</Button>
    </div>
  );
}

function UseContext() {
  const [count, setCount] = useState(0);

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
        <Button style={{ marginBottom: "20px" }}>父组件加：{count}</Button>
        <CountContext.Provider value={count}>
          <Counter />
        </CountContext.Provider>
      </Col>
    </Row>
  );
}
export default UseContext;
