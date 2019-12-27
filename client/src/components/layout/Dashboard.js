import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Profile from "../user/Profile";
import UserRoles from "../roles/Roles";
import Calendar from "../calendar/Calendar";
import Regions from "../../containers/Regions";
import { Route, Switch, useRouteMatch } from "react-router-dom";

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
              padding: 0,
              margin: "20px 0 0 0",
              minHeight: 500
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
              <Route path={`${path}/locations`}>
                <Regions />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
