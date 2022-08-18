import TokenPricesChart from "../Charts/TokenPricesChart";
import KujiUSDC from "../Charts/KujiUSDC";
import PairVolumes from "../Tables/PairVolumes";
import BarChartTotalVolumes from "../Charts/BarChartTotalVolumes";
import KujiUSDCVolume from "../Charts/KujiUSDCVolume";
import {
  Row,
  Col,
} from "reactstrap";
import InformationBar from "../Layout/InformationBar";


const Dashboard = () => {
    return (
      <>
        <div class="container-fluid">
          <Row className="text-center pt-3">
            <Col>
              <h6 className="text-white">DASHBOARD</h6>
            </Col>
          </Row>
          
          <Row className="pl-4 pr-4">
            <Col md={12} >
              <div className="p-3">
                <KujiUSDC />
              </div>
            </Col>
          </Row>
          <InformationBar/>
          <Row className="pl-4 pr-4 pt-4">
            <Col md={12} >
              <div className="p-3">
                <KujiUSDCVolume />
              </div>
            </Col>
            <Col md={12} >
              <div className="">
                <PairVolumes />
              </div>
            </Col>
            <Col md={6} >
              <div className="p-3">
                <BarChartTotalVolumes />
              </div>
            </Col>
            <Col md={6} >
              <div className="p-3">
                <TokenPricesChart />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  };
  
  export default Dashboard;