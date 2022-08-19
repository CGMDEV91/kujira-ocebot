import React, {useEffect,useState} from "react";
import {getPairInformation} from "../Global/PairsFetchsData";
import {parseVolumes} from "../Global/Helpers";
import Constants from "../Global/Constants";
import {
    Table,
    Col,
  } from "react-bootstrap";

  import {
    Card,
    CardBody,
  } from "reactstrap";

const PairsInformationTable = () => {

  const [KUJI_axlUSDC, setKUJI_axlUSDC] = useState([]);
  const [KUJI_ATOM, setKUJI_ATOM] = useState([]);
  const [ATOM_axlUSDC, setATOM_axlUSDC] = useState([]);
  const [ATOM_OSMO, setATOM_OSMO] = useState([]);
  const [EVMOS_axlUSDC, setEVMOS_axlUSDC] = useState([]);
  const [JUNO_axlUSDC, setJUNO_axlUSDC] = useState([]);
  const [LUNA_axlUSDC, setLUNA_axlUSDC] = useState([]);
  const [OSMO_axlUSDC, setOSMO_axlUSDC] = useState([]);
  const [SCRT_axlUSDC, setSCRT_axlUSDC] = useState([]);
  const [STARS_axlUSDC, setSTARS_axlUSDC] = useState([]);
  const [xAVAX_axlUSDC, setxAVAX_axlUSDC] = useState([]);
  const [wETH_axlUSDC, setwETH_axlUSDC] = useState([]);


  useEffect(() => {
      getPairInformation(Constants.KUJI_axlUSDC)
      .then(response => setKUJI_axlUSDC(response));

      getPairInformation(Constants.KUJI_ATOM)
      .then(response => setKUJI_ATOM(response));

      getPairInformation(Constants.ATOM_axlUSDC)
      .then(response => setATOM_axlUSDC(response));

      getPairInformation(Constants.ATOM_OSMO)
      .then(response => setATOM_OSMO(response));

      getPairInformation(Constants.EVMOS_axlUSDC)
      .then(response => setEVMOS_axlUSDC(response));

      getPairInformation(Constants.JUNO_axlUSDC)
      .then(response => setJUNO_axlUSDC(response));

      getPairInformation(Constants.LUNA_axlUSDC)
      .then(response => setLUNA_axlUSDC(response));

      getPairInformation(Constants.OSMO_axlUSDC)
      .then(response => setOSMO_axlUSDC(response));

      getPairInformation(Constants.SCRT_axlUSDC)
      .then(response => setSCRT_axlUSDC(response));

      getPairInformation(Constants.STARS_axlUSDC)
      .then(response => setSTARS_axlUSDC(response));

      getPairInformation(Constants.xAVAX_axlUSDC)
      .then(response => setxAVAX_axlUSDC(response));

      getPairInformation(Constants.wETH_axlUSDC)
      .then(response => setwETH_axlUSDC(response));
  }, []);

    return (
        <>
            <Col>
            <Card>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                        <th>✒Pair</th>
                        <th>⚡Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>KUJI/axlUSDC</td>
                      <td>${parseVolumes(KUJI_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>KUJI/ATOM</td>
                      <td>${parseVolumes(KUJI_ATOM.volume,1000000, ATOM_axlUSDC.close)}</td>
                    </tr>
                    <tr>
                      <td>ATOM/axlUSDC</td>
                      <td>${parseVolumes(ATOM_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>ATOM/OSMO</td>
                      <td>${parseVolumes(ATOM_OSMO.volume,1000000, OSMO_axlUSDC.close)}</td>
                    </tr>
                    <tr>
                      <td>EVMOS/axlUSDC</td>
                      <td>${parseVolumes(EVMOS_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>JUNO/axlUSDC</td>
                      <td>${parseVolumes(JUNO_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>LUNA/axlUSDC</td>
                      <td>${parseVolumes(LUNA_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>OSMO/axlUSDC</td>
                      <td>${parseVolumes(OSMO_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>SCRT/axlUSDC</td>
                      <td>${parseVolumes(SCRT_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>STARS/axlUSDC</td>
                      <td>${parseVolumes(STARS_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>wAVAX/axlUSDC</td>
                      <td>${parseVolumes(xAVAX_axlUSDC.volume,1000000)}</td>
                    </tr>
                    <tr>
                      <td>wETH/axlUSDC</td>
                      <td>${parseVolumes(wETH_axlUSDC.volume,1000000)}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </>
    );

}

export default PairsInformationTable;