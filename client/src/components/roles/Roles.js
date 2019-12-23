import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../store";
import { Row, Col } from "antd";
import RoleTable from "./RoleTable";
import { fetchUsers } from "../../actions/userList";

const UserRoles = ({ users }) => {
  //Get all users
  useEffect(() => {
    store.dispatch(fetchUsers());
  }, []);
  return (
    <Row>
      <Col>
        <section className="role_section">
          <div className="role_header">
            <h1>Выберите сотрудника для предоставления ему необходимой роли</h1>
          </div>
          <div className="role_list">
            <RoleTable users={users} />
          </div>
        </section>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  users: state.userList.users
});

export default connect(mapStateToProps)(UserRoles);
