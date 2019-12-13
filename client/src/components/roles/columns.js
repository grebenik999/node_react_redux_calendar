import React from "react";
import { Link } from "react-router-dom";
import { Divider, Tag } from "antd";

export const columns = openModal => [
  {
    title: "Сотрудник",
    dataIndex: "name",
    key: "name",
    render: name => <Link to="#">{name}</Link>
  },
  {
    title: "Должность",
    dataIndex: "position",
    key: "position",
    render: position => <Link to="#">{position}</Link>
  },
  {
    title: "Роль в системе",
    dataIndex: "roles",
    key: "roles",
    render: roles => (
      <span>
        {roles.map(role => {
          let color = role.length > 4 ? "geekblue" : "green";
          return (
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Действия",
    key: "action",
    dataIndex: "action",
    render: () => (
      <span>
        <Link to="#" key="update" onClick={openModal}>
          update
        </Link>
        <Divider type="vertical" />
        <Link to="#" key="delete">
          Delete
        </Link>
      </span>
    )
  }
];
