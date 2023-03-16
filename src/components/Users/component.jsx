import { observer } from "mobx-react";
import { Col, Space, Row, Button, Typography, Statistic } from "antd";

import User from "./User";
import AddUser from "./AddUser";

const Users = observer(
  ({ store: { users, fetchUsers, removeUser, addUser, allUsers } }) => {
    return (
      <div>
        <Space direction={"vertical"}>
          <Typography.Title>Users</Typography.Title>
          <AddUser onSubmit={addUser} />
          <Statistic title="Active Users" value={allUsers} />
          <Button type="primary" onClick={fetchUsers}>
            Fetch users
          </Button>
          <Row>
            <Space wrap style={{ justifyContent: "center" }}>
              {users.map((user) => (
                <Col key={user.id} className="gutter-row">
                  <User {...user} removeUser={removeUser} />
                </Col>
              ))}
            </Space>
          </Row>
        </Space>
      </div>
    );
  }
);

export default Users;
