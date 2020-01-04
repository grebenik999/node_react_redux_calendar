import React from "react";
import { Link } from "react-router-dom";
import { Table, Badge } from "antd";

const RegionContent = props => {
  const expandedRowRender = () => {
    const columns = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Name", dataIndex: "name", key: "name" },
      {
        title: "Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        )
      },
      { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <span className="table-operation">
            <Link to="#">Udate</Link>
            <Link to="#">Delete</Link>
          </span>
        )
      }
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56"
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  // Areas data
  const columns = [
    { title: "Регион", dataIndex: "region", key: "region" },
    {
      title: "Действия",
      key: "operation",
      render: () => <Link to="#">Изменить</Link>
    }
  ];

  // Get a list of region Areas from props.areasByRegion

  const data = [];

  let eArr = props.areasByRegion.values();
  for (let area of eArr) {
    data.push({
      key: area._id,
      region: area.name
    });
  }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
    />
  );
};

export default RegionContent;
