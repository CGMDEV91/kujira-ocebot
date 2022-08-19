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
    ArcElement,
);

const TokenPricesChart = () =>  {

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
            label: 'Prices',
            data: tokens?.map(x => x.current_price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                '#60fbd0',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                '#607d8b',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 10
        }]
    }

    var options = {
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
                fontSize: 26,
            }
        }
        ,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        return label + ' $' + context.formattedValue;
                    }
                }
            }
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
                                    <CardTitle tag="h3">Token Prices</CardTitle>
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

export default TokenPricesChart;