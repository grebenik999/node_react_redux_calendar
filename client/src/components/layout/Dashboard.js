import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Calendar from "../calendar/Calendar";
import UserRoles from "../roles/UserRoles";
import Profile from "../user/Profile";

const { Content } = Layout;

const Dashboard = () => {
  let { path } = useRouteMatch();

  return (
    <Layout>
      <Layout>
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: "20px 0 0 0",
              minHeight: 700
            }}
          >
            <Switch>
              <Route exact path={path}>
                <h1>Добро пожаловать в систему</h1>
              </Route>
              <Route path={`${path}/profile`}>
                <Profile />
              </Route>
              <Route path={`${path}/calendar`}>
                <Calendar />
              </Route>
              <Route path={`${path}/roles`}>
                <UserRoles />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
