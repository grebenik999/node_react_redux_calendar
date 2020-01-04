import React, { useState } from "react";
import { Modal, Button } from "antd";
import FormRegion from "./FormRegion";

const ModalRegion = ({ newRegion, visible, closeModal }) => {
  const [formData, setFormData] = useState({
    region_name: ""
  });

  const onChange = e => {
    setFormData({ name: e.target.value });
  };
  return (
    <Modal
      title="Создать новый Регион"
      centered
      visible={visible}
      onCancel={closeModal}
      footer={[
        <Button key="cancel" onClick={closeModal}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={() => newRegion(formData)}>
          Сохранить
        </Button>
      ]}
    >
      <FormRegion hanleInputChange={onChange} />
    </Modal>
  );
};
export default ModalRegion;
