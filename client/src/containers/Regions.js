import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  createRegion,
  getRegionsList,
  getAreaByRegion
} from "../actions/region.action";
import RegionTabs from "../components/regions/RegionTabs";
import store from "../store";

const Regions = ({ regions, areasByRegion }) => {
  const [visible, setVisible] = useState(false);

  // Get Region list
  useEffect(() => {
    store.dispatch(getRegionsList());
  }, []);

  // Open Modal
  const openModal = () => {
    setVisible(true);
  };
  // Close Modal
  const closeModal = () => {
    setVisible(false);
  };

  // Create new Region action
  const newRegion = async name => {
    await store.dispatch(createRegion(name));
    await store.dispatch(getRegionsList());
    setVisible(false);
  };

  // Get Area list by region
  const getAreasByRegionId = id => {
    store.dispatch(getAreaByRegion(id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <RegionTabs
        newRegion={newRegion}
        areaByRegion={getAreasByRegionId}
        regions={regions}
        areasByRegion={areasByRegion}
        visible={visible}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  regions: state.regions,
  areasByRegion: state.areasByRegion.areas
});

export default connect(mapStateToProps)(Regions);
