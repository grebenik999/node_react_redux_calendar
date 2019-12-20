import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../store";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Profile from "../user/Profile";
import UserRoles from "../roles/Roles";
import Calendar from "../calendar/Calendar";
import Locations from "../locations/Locations";
import { fetchUsers } from "../../actions/userList";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const { Content } = Layout;

const Dashboard = ({ users }) => {
  let { path } = useRouteMatch();

  //Get all users
  useEffect(() => {
    store.dispatch(fetchUsers());
  }, []);

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
                <UserRoles users={users} />
              </Route>
              <Route path={`${path}/locations`}>
                <Locations />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => ({
  users: state.userList.users
});

export default connect(mapStateToProps)(Dashboard);
