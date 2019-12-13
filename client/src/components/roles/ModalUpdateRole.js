import React, { useState } from "react";
import { Modal, Button } from "antd";

const ModalUpdateRole = ({ visible, closeModal }) => {
  return (
    <div>
      <Modal
        title="Update the role"
        centered
        visible={visible}
        // onOk={() => setModalVisible(false)}
        onCancel={closeModal}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};

export default ModalUpdateRole;
