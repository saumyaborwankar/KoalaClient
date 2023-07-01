import { Collapse } from "antd";

const { Panel } = Collapse;

function Faq() {
  return (
    <div className="faq">
      <h2> FAQ</h2>
      <Collapse accordion style={{ width: 600 }}>
        <Panel header="What is Koala Client" key="1">
          <p>
            Its an anonymous messenger service that you can use to get feedback
          </p>
        </Panel>
        <Panel header="Question 2" key="2">
          <p>Answer 2</p>
        </Panel>
        <Panel header="Question 3" key="3">
          <p>Answer 3</p>
        </Panel>
        {/* Add more panels for additional questions and answers */}
      </Collapse>
    </div>
  );
}

export default Faq;
