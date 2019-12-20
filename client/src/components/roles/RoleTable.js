import React, { Fragment, useState } from "react";
import uuid from "uuid";
import { Table } from "antd";
import { columns } from "./columns";
import ModalUpdateRole from "./ModalUpdateRole";

const RoleTable = props => {
  const [visible, setVisible] = useState(false);
  const [choosenUser, setChoosenUser] = useState(null);

  // Get all the users to the table
  const data = props.users.map(user => ({
    key: user._id,
    name: user.name,
    email: user.email,
    position: user.position,
    role: user.role
  }));

  // Open Modal and select the user for update
  const openModal = user => {
    setVisible(true);
    // user id
    setChoosenUser(user);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <Table
        columns={columns(openModal)}
        dataSource={data}
        rowKey={() => uuid()}
      />
      <ModalUpdateRole
        user={choosenUser}
        visible={visible}
        closeModal={closeModal}
      />
    </Fragment>
  );
};

export default RoleTable;
