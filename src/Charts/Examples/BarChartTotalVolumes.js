import React, {useEffect,useState} from "react";
import {Chart as ChartJS, BarElement, LinearScale, CategoryScale} from 'chart.js';
import {Bar} from 'react-chartjs-2';
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
    LinearScale,
    BarElement
);

const BarChartTotalVolumes = () =>  {

    const [tokens, setTokens] = useState([]);

    const getTokens = async () => {
        await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=kujira%2Ccosmos-hub%2Cevmos%2Cjuno-network%2Cluna%2Cosmosis%2Csecret%2Cstargaze%2Cwrapped-avax&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => {
            response.json().then(json => {
                //console.log(json);
                setTokens(json);
            })
        })
    }
    
    useEffect(() => {
        getTokens();
    }, []);

    var data = {
        labels: tokens?.map(x => x.name),
        datasets: [{
            label: 'Total Volume',
            data: tokens?.map(x => x.total_volume),
            backgroundColor: [
                '#1e92e6',
            ],
            borderColor: [
                '#1c6599',
            ],
            borderWidth: 1
        },

    ]
    }

    var options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
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
                    padding: 8,
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
        
    }

    
    return (
        <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card className="card-chart full-width">
                            <CardHeader>
                                <Row>
                                <Col className="text-left" sm="6">
                                    <CardTitle tag="h3">Total Volumes</CardTitle>
                                </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Bar 
                                        data={data}
                                        options={options}
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

export default BarChartTotalVolumes;