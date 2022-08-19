import React, {useEffect,useState} from "react";
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';
import {Line} from 'react-chartjs-2';
import Constants from "../Global/Constants";
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
import BlurEffect from "../GenericComponents/BlurEffect";

ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement
);

const parseDate8h = (precision, startDate) =>{
    if(precision === '240'){
        let newDate = new Date();
        newDate.setDate(newDate.getDate() -3);
        
        return new Date(new Date(newDate).toString().split('GMT')[0]+' UTC').toISOString();
    }
    return startDate;
}

const TransactionsChart = () =>  {

    const [chart, setChart] = useState([]);

    const getKujiraUSDC = async (precision = '1D') => {
        var startDate = '2022-08-03T00:00:00.000Z';
        const endDate = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString();

        startDate = parseDate8h(precision, startDate);
        
        let url = 'https://api.kujira.app/api/trades/candles?contract=' + Constants.KUJI_axlUSDC + '&precision=' + precision + '&from=' + startDate + '&to=' + endDate;
        await fetch(url)
            .then((response) => {response.json()
            .then((json) => {
                //console.log(json.candles);
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
        getKujiraUSDC();
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

    var lineChart = {
        
        data: {
            labels: chart?.map(x => x.bin.substring(0,10)),
            datasets: [{
                label: 'Price',
                data: chart?.map(x => x.close.substring(0,5)),
                backgroundColor: [
                    "#1e92e6",
                ],
                borderColor: "#1e92e6",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1e92e6",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#60fbd0",
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
            <div className="content chart-container">
                <BlurEffect text="Coming Soon..." />
                <Row>
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <CardTitle tag="h3">Transactions</CardTitle>
                                    </Col>
                                </Row>
                        </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line 
                                        width={400}
                                        data={lineChart.data}
                                        options={lineChart.options}
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

export default TransactionsChart;