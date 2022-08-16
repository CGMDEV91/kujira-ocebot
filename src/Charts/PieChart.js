import React, {useEffect,useState} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
);

const PieChart = () =>  {

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

    var data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.coins?.map(x => x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26,
            }
        }
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
                                    <CardTitle tag="h2">Pie Chart</CardTitle>
                                </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Pie 
                                        width={400}
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

export default PieChart;