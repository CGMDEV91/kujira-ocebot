import BarChart from "../Charts/BarChart";
import DoughnutChart from "../Charts/DoughnutChart";
import LineChart from "../Charts/LineChart";
import PieChart from "../Charts/PieChart";
import KujiUSDT from "../Charts/KujiUSDT";
import {
  Row,
  Col,
} from "reactstrap";


const Charts = () => {
    return (
      <>
        <div className="p-4">
          <h6 className="mb-3 ml-4 text-white">DASHBOARD</h6>
          <Row>
          <Col md={12} >
              <div className="p-3">
                <KujiUSDT />
              </div>
            </Col>
            <Col md={6} >
              <div className="p-3">
                <LineChart />
              </div>
            </Col>
            <Col md={6} >
              <div className="p-3">
                <BarChart />
              </div>
            </Col>
            <Col md={6} >
              <div className="p-3">
                <DoughnutChart />
              </div>
            </Col>
            <Col md={6} >
              <div className="p-3">
                <PieChart />
              </div>
            </Col>
          </Row>
          
        </div>
      </>
    );
  };
  
  export default Charts;