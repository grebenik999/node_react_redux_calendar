export const AreaList = () => {
  const columns = [
    { title: "Регион", dataIndex: "region", key: "region" },
    {
      title: "Действия",
      key: "operation",
      render: () => <Link to="#">Update</Link>
    }
  ];

  const data = [];
  for (let i = 0; i < 2; ++i) {
    data.push({
      key: i,
      region: "Запорожье"
    });
  }
};
