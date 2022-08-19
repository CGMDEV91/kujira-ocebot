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
          
          <Row className="pt-4 pl-4 pr-4">
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
            <Col md={6} >
              <div className="pl-3 pr-3 ">
                <PairVolumesChart />
              </div>
            </Col>
            <Col md={6} >
              <div className="">
                <PairVolumesTable />
              </div>
            </Col>
            <Col md={12} >
              <div className="">
                <TransactionsChart />
              </div>
            </Col>
            <Col md={12} >
              <div className="">
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