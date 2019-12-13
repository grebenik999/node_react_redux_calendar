import React from "react";
import { Row, Col } from "antd";
import RoleTable from "./RoleTable";

const UserRoles = props => {
  return (
    <Row>
      <Col>
        <section className="role_section">
          <div className="role_header">
            <h1>Выберите сотрудника для предоставления ему необходимой роли</h1>
          </div>
          <div className="role_list">
            <RoleTable users={props.users} />
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default UserRoles;
