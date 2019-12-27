import React from "react";
import { Tabs, Button } from "antd";
import RegionContent from "./RegionContent";

const { TabPane } = Tabs;

const operations = <Button>Добавить регион</Button>;

const RegionTabs = () => {
  return (
    <Tabs tabBarExtraContent={operations}>
      <TabPane tab="Юг" key="1">
        <RegionContent content="1" />
      </TabPane>
      <TabPane tab="Запад" key="2">
        <RegionContent content="2" />
      </TabPane>
      <TabPane tab="Центр" key="3">
        <RegionContent content="3" />
      </TabPane>
      <TabPane tab="Восток" key="4">
        <RegionContent content="4" />
      </TabPane>
    </Tabs>
  );
};

export default RegionTabs;
