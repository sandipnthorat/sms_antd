import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, Typography, Breadcrumb, Image, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import BrowserMenu from "./BrowserMenu"
import BreadCrumb from "./BreadCrumb";
import logo from "../../../assets/logo_light.png"

const { Title } = Typography;

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  let location = useLocation();


  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <>
      <nav >
        <Layout>
          <Layout.Header style={{ padding: '0px 5px' }}>
            <Row align={'middle'}>
              <Col span={12}>
                <Image
                  width={120}
                  preview={false}
                  src={logo}
                />
              </Col>
              <Col span={12} className="navbar-menu">
                <Button className="menuButton" type="icon" onClick={showDrawer}>
                  <MenuOutlined />
                </Button>
                <div className="rightMenu">
                  <BrowserMenu mode={"horizontal"} />
                </div>
                <Drawer
                  className="nav_drawer"
                  // title={<Image
                  //   width={120}
                  //   preview={false}
                  //   src={logo}
                  // />}
                  placement="right"
                  closable={true}
                  onClose={showDrawer}
                  open={visible}
                // style={{ zIndex: 99999 }}
                >
                  <BrowserMenu mode={"inline"} />
                </Drawer>
              </Col>
            </Row>
            {/* <div className="logo">
              <Image
                width={120}
                preview={false}
                src={logo}
              />
            </div>
            <div className="navbar-menu">
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <div className="rightMenu">
                <BrowserMenu mode={"horizontal"} />
              </div>
              <Drawer
                title={"SMS"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                open={visible}
                style={{ zIndex: 99999 }}
              >
                <BrowserMenu mode={"inline"} />
              </Drawer>
            </div> */}
          </Layout.Header>
        </Layout>

      </nav>
      <BreadCrumb />
    </>
  );
};

export default Nav;
