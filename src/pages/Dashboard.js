import KujiUSDC from "../Charts/KujiUSDC";
import PairsInformationTable from "../Tables/PairsInformationTable";
import KujiUSDCVolume from "../Charts/KujiUSDCVolume";
import PairVolumesTable from "../Tables/PairVolumesTable";
import {
  Row,
  Col,
} from "reactstrap";
import InformationBar from "../Layout/InformationBar";
import PairVolumesChart from "../Charts/PairVolumesChart";
import TransactionsChart from "../Charts/TransactionsChart";
import StakingEvolutionChart from "../Charts/StakingEvolutionChart";


const Dashboard = () => {
    return (
      <>
        <div className="container-fluid">
          
          <Row className="mt-3 pl-md-4 pr-md-4 pt-4">
            <Col md={6} >
              <div className="pl-0 pr-0 pl-md-3 pr-md-3">
                <KujiUSDC />
              </div>
            </Col>
            <Col md={6} >
              <div className="mt-0  mb-md-2 pl-0 pr-0 pl-md-3 pr-md-3">
              <KujiUSDCVolume />
              </div>
            </Col>
          </Row>
          <div className="pb-2 pb-md-4">
            <InformationBar />
          </div>
          <Row className="mt-3 mt-md-2 pl-md-4 pr-md-4">
            <Col md={6} >
              <div className="pl-0 pr-0 pl-md-3 pr-md-3">
                <PairVolumesChart />
              </div>
            </Col>
            <Col md={6} >
              <div className="pl-0 pr-0 pl-md-3 pr-md-3">
                <PairVolumesTable />
              </div>
            </Col>
            <Col md={12} >
              <div className="pl-0 pr-0 pl-md-3 pr-md-3">
                <TransactionsChart />
              </div>
            </Col>
            <Col md={12} >
              <div className="pl-0 pr-0 pl-md-3 pr-md-3">
                <StakingEvolutionChart />
              </div>
            </Col>
            <Col md={12} >
              <div className="">
                <PairsInformationTable />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  };
  
  export default Dashboard;