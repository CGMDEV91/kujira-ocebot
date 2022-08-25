import KujiUSDC from "../Charts/KujiUSDC";
import PairsInformationTable from "../Tables/PairsInformationTable";
import KujiUSDCVolume from "../Charts/KujiUSDCVolume";
import PairVolumesTable from "../Tables/PairVolumesTable";
import {
  Row,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap";
import InformationBar from "../Layout/InformationBar";
import PairVolumesChart from "../Charts/PairVolumesChart";
import TransactionsChart from "../Charts/TransactionsChart";
import StakingEvolutionChart from "../Charts/StakingEvolutionChart";
import { Button } from "reactstrap";
import GenericPriceChart from "../Charts/GenericPriceChart";

const Dashboard = () => {

  const sendRedirect = () => {
    var searchInformation = document.getElementById('search-button').value;
    const url = 'https://finder.kujira.app/kaiyo-1';
    var txCondition = '';

    txCondition = new RegExp("(?=.*[A-Z])(?=.*\\d).+$");
    if(txCondition.test(searchInformation)){
      window.open(url + '/tx/' + searchInformation,'_blank');
    }

    txCondition = new RegExp('^[0-9]+$');
    if(txCondition.test(searchInformation)){
      window.open(url + '/block/' + searchInformation,'_blank');
    }

    txCondition = new RegExp("kujira14");
    if(txCondition.test(searchInformation)){
      window.open(url + '/contract/' + searchInformation,'_blank');
    }

    txCondition = new RegExp("kujira");
    if(txCondition.test(searchInformation)){
      window.open(url + '/address/' + searchInformation,'_blank');
    }

}

    return (
      <>
        <div className="container-fluid">

        <Row className="pt-4 pt-md-4 ml-md-4 mr-md-4">
            <div className="col-12">
              <p className="d-none d-md-block h6 kujira-finder-label">Kujira Finder</p>
            </div>
            <div className="col-12 d-flex">
              <InputGroup>
                <FormControl
                  id="search-button" 
                  className="search-bar"
                  placeholder="Addres/ TX / Block/ Contract"
                  aria-label="Search"
              />
              </InputGroup>
              <Button  className="search-button ml-2 pl-3 pr-3" onClick={sendRedirect}>Search</Button>
            </div>
          </Row>

          <Row className="mt-2 pl-md-4 pr-md-4 pt-4">
            <Col md={6} >
              <div className="pl-0 pr-0 pl-md-3 pr-md-3">
                <GenericPriceChart />
              </div>
            </Col>
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