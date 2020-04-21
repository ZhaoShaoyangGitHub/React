import React from "react";
import { Layout, Menu, Button, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, Route, Switch } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import styles from "./index.module.scss";
import Tex1 from "../Hook/UseState";
import Tex2 from "../Hook/UseEffect";
import Tex3 from "../Hook/UseContext";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

type stateType = {
  [propsName: string]: any;
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className={styles.logo}>
              <img src={logo} alt="React" className={styles["app-logo"]} />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/home">HOME</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/news">NEWS</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout className={styles.home_layout}>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                // eslint-disable-next-line object-property-newline
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <UserOutlined />
                      subnav 1
                    </span>
                  }
                >
                  <Menu.Item key="1">option1</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Row>
                  <Col span={4}>
                    <Link to="/home/useState">
                      <Button type="link"> HOOK: useState</Button>
                    </Link>
                  </Col>
                  <Col span={4}>
                    <Link to="/home/useEffect">
                      <Button type="link"> HOOK: useEffect</Button>
                    </Link>
                  </Col>
                  <Col span={4}>
                    <Link to="/home/useContext">
                      <Button type="link"> HOOK: useEffect</Button>
                    </Link>
                  </Col>
                </Row>
                <Switch>
                  <Route exact path="/home/useState">
                    <Tex1 />
                  </Route>
                  <Route exact path="/home/useEffect">
                    <Tex2 />
                  </Route>
                  <Route exact path="/home/useContext">
                    <Tex3 />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;
