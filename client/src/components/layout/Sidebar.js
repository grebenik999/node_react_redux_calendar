import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  let { url } = useRouteMatch();

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["sub1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              Пользователь
            </span>
          }
        >
          <Menu.Item key="0">
            <Link to={`${url}/profile`}>Профиль</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to={`${url}/calendar`}>Календарь</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`${url}/roles`}>Роли</Link>
          </Menu.Item>
          <Menu.Item key="3">Регионы</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              Аналитика
            </span>
          }
        >
          <Menu.Item key="5">option1</Menu.Item>
          <Menu.Item key="6">option2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="notification" />
              Отчеты
            </span>
          }
        >
          <Menu.Item key="9">option1</Menu.Item>
          <Menu.Item key="10">option2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
