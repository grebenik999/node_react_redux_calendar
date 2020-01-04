import React from "react";
import { Row, Col, Form, Icon, Input } from "antd";

const FormRegion = props => {
  return (
    <Row>
      <Col>
        <Form className="new-region-form">
          <Form.Item>
            <Input
              prefix={
                <Icon type="compass" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Введите название региона"
              name="name"
              onChange={e => props.hanleInputChange(e)}
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default FormRegion;
