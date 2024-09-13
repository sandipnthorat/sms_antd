import React, { useState, useEffect } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Divider } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import navLinks from "../../../assets/navLinks"

const BrowserMenu = ({ mode }) => {
  const navigate = useNavigate();
  let location = useLocation();

  const [current, setCurrent] = useState();

  const handelNavigation = (e) => {
    const target = navLinks.find((item) => {
      return item.key.toString() == e.key;
    });
    if (target) {
      setCurrent(target.target)
      navigate(target.target);
    }
  };

  // const onClick = (e) => {
  //   setCurrent(e.key);
  // };

  return (
    // <Menu selectedKeys={[current]} mode={mode} disabledOverflow={true}>
    //   {
    //     navMenu.map((e, index) => {
    //       return <Menu.Item onClick={e => handelNavigation(e)}
    //         key={e.key}>{e.label}</Menu.Item>
    //     })
    //   }
    // </Menu >

    <Menu key={1} className="rightMenu_btn" theme="dark" style={{ color: '#fff' }} onClick={handelNavigation} selectedKeys={[current]} mode={mode} items={navLinks} >
      {navLinks.map((e, i) => {
        return <>
          <Menu.Item key={i}>{e.label}</Menu.Item>
          <Divider />
        </>
      })}
    </Menu>
  );
}

export default BrowserMenu;
