import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;
const User = ({ id, name, email, removeUser }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[<DeleteOutlined key={"delete"} onClick={() => removeUser(id)} />]}
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
      title={name}
      description={email}
    />
  </Card>
);
export default User;
