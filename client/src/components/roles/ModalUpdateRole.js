import React from "react";
import store from "../../store";
import { Modal, Button } from "antd";
import { connect } from "react-redux";
import FormUpdate from "./FormUpdate";
import { changeRole } from "../../actions/updateRole";

const ModalUpdateRole = ({ user, visible, closeModal }) => {
  // Submit updated User Role
  const updateRole = () => {
    // Update the role
    store.dispatch(changeRole(user));
    closeModal();
  };

  return (
    <div>
      <Modal
        title="Update the role"
        centered
        visible={visible}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            Отмена
          </Button>,
          <Button key="submit" type="primary" onClick={updateRole}>
            Сохранить
          </Button>
        ]}
      >
        <FormUpdate user={user} />
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  updateRole: state.updateRole
});

export default connect(mapStateToProps)(ModalUpdateRole);
