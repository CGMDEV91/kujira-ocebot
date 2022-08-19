import { useState, useEffect } from "react";
import Constants from "../Global/Constants";
import {getPairInformation} from "../Global/PairsFetchsData";
import {parseVolumes} from "../Global/Helpers";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

import {Chart as ChartJS, ArcElement, Tooltip, defaults, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';


ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
);

const PairVolumesChart = () => {
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

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks:{
                    callback: function(value, index, ticks) {
                        return '';
                    },
                    beginAtZero: true,
                    color: '#a0a0a0',
                    fontSize: 12,
                }
            }
        },
        legend: {
            labels: {
                boxWidth: 10,
                padding: 10,
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        return label + ' $' + context.formattedValue;
                    }
                }
            },
            legend: {
                display: true,
                position: 'bottom',
                align: 'center',
                labels: {
                    boxWidth: 20,
                    padding: 20,
                }
            },
        },
    }

    var pieChart = {
        
        data: {
            //labels: KUJI_axlUSDC.candles[0].bin,
            labels: [
                'KUJI/axlUSDC',
                'KUJI/ATOM',
                'ATOM/axlUSDC',
                'ATOM/OSMO',
                'EVMOS/axlUSDC',
                'JUNO/axlUSDC',
                'LUNA/axlUSDC',
                'OSMO/axlUSDC',
                'SCRT/axlUSDC',
                'STARS/axlUSDC',
                'xAVAX/axlUSDC',
                'wETH/axlUSDC'
            ],
            datasets: [{
                label: 'Price',
                data: [

                    parseInt(KUJI_axlUSDC.volume/ 1000000),
                    parseInt((KUJI_ATOM.volume/ 1000000) * ATOM_axlUSDC.close),
                    parseInt(ATOM_axlUSDC.volume/ 1000000),
                    parseInt((ATOM_OSMO.volume/ 1000000)  * OSMO_axlUSDC.close),
                    parseInt(EVMOS_axlUSDC.volume/ 1000000),
                    parseInt(JUNO_axlUSDC.volume/ 1000000),
                    parseInt(LUNA_axlUSDC.volume/ 1000000),
                    parseInt(OSMO_axlUSDC.volume/ 1000000),
                    parseInt(SCRT_axlUSDC.volume/ 1000000),
                    parseInt(STARS_axlUSDC.volume/ 1000000),
                    parseInt(xAVAX_axlUSDC.volume/ 1000000),
                    parseInt(wETH_axlUSDC.volume/1000000),
                ],
                backgroundColor: [
                    'rgb(30, 146, 230, 0.2)',
                    'rgb(96, 251, 208, 0.2)',
                    'rgb(229, 57, 53, 0.5)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgb(144, 164, 174, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'aqua',
                    'green',
                    'yellow',
                    'orange',
                    'lightgreen',
                    'purple',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
                hoverOffset: 10
            }]
        },
        options: options
    }
    
    return (
        <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left">
                                        <CardTitle tag="h3">Pair Volumes</CardTitle>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Pie 
                                        height={500}
                                        data={pieChart.data}
                                        options={pieChart.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}


export default PairVolumesChart;