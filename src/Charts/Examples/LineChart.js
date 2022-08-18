import React, {useEffect,useState} from "react";
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";

ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement
);


const LineChart = () =>  {

    const [chart, setChart] = useState([]);

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    var apiKey = "coinranking2c433c5d5c8c62201d8a1f1ba5147a2862b8c2021d22df2a";

    /* 
    *
    * USE EFFECT AND FETCH 
    *
    */
    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((response) => {
                response.json().then((json) => {
                    //console.log(json);
                    setChart(json.data);
                })
            }).catch(error => {
                console.log(error);
            })
        }
        fetchCoins();
    }, [baseUrl, apiKey]);
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
            position: "nearest"
          },
        legend: {
            labels: {
                fontSize: 26,
            }
        }
    }

    var chart1 = {
        
        data: {
            labels: chart?.coins?.map(x => x.name),
            datasets: [{
                label: `${chart?.coins?.length} Coins Available`,
                data: chart?.coins?.map(x => x.price),
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
                                    <h5 className="card-category">Prices</h5>
                                    <CardTitle tag="h2">Line Chart</CardTitle>
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

export default LineChart;