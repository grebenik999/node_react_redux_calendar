import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";

const Navbar = ({ isAuthenticated }) => {
  let current = "1";
  const { Header } = Layout;

  const activehandleClick = e => {
    current = e.key;
  };

  const handleLogout = () => {
    if (localStorage.token) {
      isAuthenticated = false;
      localStorage.removeItem("token");
      return <Redirect to="/" />;
    }
  };

  if (isAuthenticated) {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          onClick={e => activehandleClick(e)}
          defaultSelectedKeys={[current]}
          mode="horizontal"
          theme="dark"
          className="top_menu"
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/dashboard">Главная</Link>
          </Menu.Item>

          <Menu.Item key="2" onClick={() => handleLogout()}>
            Выход
          </Menu.Item>
        </Menu>
      </Header>
    );
  }

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        onClick={e => activehandleClick(e)}
        defaultSelectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        className="top_menu"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="gold" /> ZV
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/register">Регистрация</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/login">Вход</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Navbar);
