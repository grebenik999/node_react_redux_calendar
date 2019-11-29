import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Calendar from "../calendar/Calendar";

const { Content } = Layout;

class Dashboard extends Component {
  render() {
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
                minHeight: 800
              }}
            >
              <Calendar />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
