import React from "react";
import { Row, Col, Form, Select, Icon, Input } from "antd";

const { Option } = Select;

const FormUpdate = props => {
  const user = props.user;

  // Change the role
  const handleChange = value => {
    user.role = value;
    return user;
  };

  return (
    <Row>
      <Col>
        <Form className="update-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              name="name"
              value={user.name}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              name="email"
              value={user.email}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={
                <Icon type="idcard" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Position"
              name="position"
              value={user.position}
            />
          </Form.Item>
          <Form.Item>
            <Select
              prefix={
                <Icon type="idcard" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              defaultValue={user.role}
              onChange={value => handleChange(value)}
            >
              <Option value="user">User</Option>
              <Option value="admin">Admin</Option>
              <Option value="superAdmin">Super Admin</Option>
            </Select>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default FormUpdate;
