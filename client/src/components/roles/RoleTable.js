import React, { Fragment, useState } from "react";
import uuid from "uuid";
import { Table } from "antd";
import { columns } from "./columns";
import ModalUpdateRole from "./ModalUpdateRole";

const RoleTable = props => {
  const [visible, setVisible] = useState(false);
  const data = props.users.map(user => ({
    key: user.id,
    name: user.name,
    email: user.email,
    position: user.position,
    roles: [user.role]
  }));

  const openModal = () => {
    setVisible(true);
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
      <ModalUpdateRole visible={visible} closeModal={closeModal} />
    </Fragment>
  );
};

export default RoleTable;
