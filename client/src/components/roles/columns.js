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
    dataIndex: "role",
    key: "role",
    render: role => {
      let color = role.length > 4 ? "geekblue" : "green";
      return (
        <span>
          {
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          }
        </span>
      );
    }
  },
  {
    title: "Действия",
    key: "action",
    dataIndex: "action",
    render: (_id, user) => (
      <span>
        <Link to="#" key="update" onClick={() => openModal(user)}>
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
