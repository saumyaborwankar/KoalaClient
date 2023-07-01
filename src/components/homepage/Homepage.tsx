import { Card, Image, Space } from "antd";
import "./Homepage.css";
import koala from "../../assets/koala.png";
import Faq from "../faq/Faq";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-card-1">
        <Space direction="vertical" size={50}>
          <Card
            // title="Koala Client"
            // extra={<a href="#">More</a>}
            style={{ width: 600 }}
          >
            <Image width={200} src={koala} />
            <h2>An anonymous messenger</h2>
            <p></p>
          </Card>
        </Space>
      </div>
      <div className="homepage-faq">
        <Faq />
      </div>
    </div>
  );
}

export default Homepage;
