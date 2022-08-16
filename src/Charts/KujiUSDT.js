import React, {useEffect,useState} from "react";
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

import classNames from "classnames";

ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement
);


const KujiUSDT = () =>  {

    const [chart, setChart] = useState([]);

    const getKujiraUSDT = async (precision = '1D', endDate = '2022-08-10T00:00:00.000Z') => {
        const startDate = '2022-08-03T00:00:00.000Z';
        let url = 'https://api.kujira.app/api/trades/candles?contract=kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867&precision=' + precision + '&from=' + startDate + '&to=' + endDate;
        await fetch(url)
            .then((response) => {response.json()
            .then((json) => {
                console.log(json.candles);
                setChart(json.candles);
            }).catch(error => {
                console.log(error);
            })
        });
    }

    /* 
    *
    * USE EFFECT AND FETCH 
    *
    */
    useEffect(() => {
        getKujiraUSDT('1D');
    }, []);
    /* 
    *
    * END USE EFFECT AND FETCH 
    *
    */

    var optionsChart = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        return label + ' $' + context.parsed.y;
                    }
                }
            }
        },
        scales: {
            yAxes:{
                grid: {
                    drawBorder: false,
                    color: "transparent",
                    zeroLineColor: "transparent"
                },
                ticks:{
                    callback: function(value, index, ticks) {
                        return '$ ' + value;
                    },
                    beginAtZero: true,
                    color: '#a0a0a0',
                    fontSize: 12,
                }
            },
            xAxes: {
                grid: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                },
                ticks:{
                    color: '#a0a0a0',
                    fontSize: 12,
                }
            },
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
          },
        legend: {
            labels: {
                fontSize: 26,
            }
        }
    }

    var chart1 = {
        
        data: {
            labels: chart?.map(x => x.bin.substring(0,10)),
            datasets: [{
                label: 'Price',
                data: chart?.map(x => x.close.substring(0,5)),
                backgroundColor: [
                    "#1f8ef1",
                ],
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
            }]
        },
        options: optionsChart
    }
    
    return (
        <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <CardTitle tag="h3">KUJI/USDT</CardTitle>
                                    </Col>
                                    <Col sm="6" className="text-right">
                                        <ButtonGroup
                                        className="btn-group-toggle float-right"
                                        data-toggle="buttons"
                                        >
                                        <Button
                                            tag="label"
                                            className={classNames("btn-simple", {
                                                active: "data1"
                                              })}
                                            color="info"
                                            id="0"
                                            size="sm"
                                            onClick={() => getKujiraUSDT('1D')}
                                        >
                                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                            1D
                                            </span>
                                            <span className="d-block d-sm-none">
                                            <i className="tim-icons icon-single-02" />
                                            </span>
                                        </Button>
                                        <Button
                                            tag="label"
                                            className={classNames("btn-simple", {
                                                active: "data1"
                                              })}
                                            color="info"
                                            id="0"
                                            size="sm"
                                            onClick={() => getKujiraUSDT('240')}
                                        >
                                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                            7D
                                            </span>
                                            <span className="d-block d-sm-none">
                                            <i className="tim-icons icon-single-02" />
                                            </span>
                                        </Button>
                                        <Button
                                            color="info"
                                            className={classNames("btn-simple", {
                                                active: "data2"
                                              })}
                                            id="1"
                                            size="sm"
                                            tag="label"
                                            onClick={() => getKujiraUSDT('1M')}
                                        >
                                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                            1M
                                            </span>
                                            <span className="d-block d-sm-none">
                                            <i className="tim-icons icon-gift-2" />
                                            </span>
                                        </Button>
                                        <Button
                                            color="info"
                                            className={classNames("btn-simple", {
                                                active: "data3"
                                              })}
                                            id="2"
                                            size="sm"
                                            tag="label"
                                            onClick={() => getKujiraUSDT('12M')}
                                        >
                                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                            12M
                                            </span>
                                            <span className="d-block d-sm-none">
                                            <i className="tim-icons icon-tap-02" />
                                            </span>
                                        </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                        </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line 
                                        width={400}
                                        data={chart1.data}
                                        options={chart1.options}
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

export default KujiUSDT;