import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Button, Icon } from "antd";
import RegionContent from "./RegionContent";
import ModalRegion from "./ModalRegion";

const { TabPane } = Tabs;

const RegionTabs = props => {
  const [active, setActive] = useState(null);
  const { regions } = props.regions;

  const operations = <Button onClick={props.openModal}>Добавить Регион</Button>;

  // Set default tab with data
  useEffect(() => {
    let arr1 = regions[0];
    if (!arr1) {
      return undefined;
    }
    if (active === null) {
      setActive(arr1._id);
      props.areaByRegion(arr1._id);
    }
  });

  // get the area by click on the tab
  const getAreasByRegion = e => {
    props.areaByRegion(e);
    setActive(e);
  };

  return (
    <Fragment>
      <ModalRegion
        visible={props.visible}
        closeModal={props.closeModal}
        newRegion={props.newRegion}
      />
      <Tabs
        tabBarExtraContent={operations}
        activeKey={active}
        onChange={e => getAreasByRegion(e)}
      >
        {regions ? (
          regions.map(region => (
            <TabPane tab={region.name} key={region._id}>
              <RegionContent areasByRegion={props.areasByRegion} />
            </TabPane>
          ))
        ) : (
          <Icon type="loading" />
        )}
      </Tabs>
    </Fragment>
  );
};

export default RegionTabs;
