import React, {useEffect,useState} from "react";
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';
import {Line} from 'react-chartjs-2';
import Constants from "../Global/Constants";
import BlurEffect from "../GenericComponents/BlurEffect";
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

const GenericPriceChart = ({
    options
  }) =>  {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedToken, setSelectedToken] = useState('kujira');
    const [selectedTokenLabel, setSelectedTokenLabel] = useState('KUJI');
    const [selectedCurrency, setSelectedCurrency] = useState('usd');
    const [selectedDays, setSelecteDays] = useState('7');
    const [selectedInterval, setSelectedInterval] = useState('daily');

    const selectOptions = [
        {
            'value': 'kujira',
            'name': 'KUJI',
            'key': '1'
        },
        {
            'value': 'cosmos',
            'name': 'ATOM',
            'key': '2'
        },
        {
            'value': 'evmos',
            'name': 'EVMOS',
            'key': '3'
        },
        {
            'value': 'juno-network',
            'name': 'JUNO',
            'key': '4'
        },
        {
            'value': 'osmosis',
            'name': 'OSMO',
            'key': '5'
        },
        {
            'value': 'secret',
            'name': 'SCRT',
            'key': '6'
        },
        {
            'value': 'stargaze',
            'name': 'STARS',
            'key': '7'
        },
        {
            'value': 'wrapped-avax',
            'name': 'wAVAX',
            'key': '8'
        },
        {
            'value': 'weth',
            'name': 'wETH',
            'key': '9'
        },
    ];

    const handleChange = ({ target }) => {
        setSelectedToken(target.value);
        setSelectedTokenLabel(target.options[target.selectedIndex].text);
        getTokenData(target.value,selectedCurrency,selectedDays,selectedInterval);
    }


    const fromTimestampToDate = (timestamp) => {
        return new Date(timestamp).toLocaleString().slice(0,9);
    }

    const getTokenData = async (
        coin = 'bitcoin',
        vs_currency = 'usd',
        days = '7',
        interval = 'daily'
        ) => {

            setSelectedCurrency(vs_currency);
            setSelecteDays(days);
            setSelectedInterval(interval);

        setLoading(true);

        let url = 'https://api.coingecko.com/api/v3/coins/'+
        coin + '/market_chart?vs_currency=' + vs_currency + '&days=' + days + '&interval=' + interval;
            console.log(url);
        let newArray = [];

        await fetch(url)
            .then((response) => {response.json()
            .then((json) => {
                //console.log(json);
                json.prices.map((x) => {
                    let date = fromTimestampToDate(x[0]);
                    let price = parseFloat(x[1]).toFixed(3);

                    newArray.push([date,price]);
                })

                setData(newArray);
                setLoading(false);
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
        getTokenData();
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
            labels: data?.map(x => x[0]),
            datasets: [{
                label: 'Price',
                data: data?.map(x => x[1]),
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
                {
                    loading && (<BlurEffect text="Loading..." />)
                }
                
                <Row>
                    <Col sm="6" className="mb-3">
                        <select onChange={(e) => handleChange(e)} id="token-selector" name="token-selector" className="form-select">
                            {
                                selectOptions.map((opt) => {
                                    return (
                                        <option key={opt.key} value={opt.value}>{opt.name}</option>
                                    )
                                })
                            }
                        </select>
                    </Col>
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    
                                    <Col className="text-left" sm="6">
                                        <CardTitle tag="h3">{selectedTokenLabel}/USDC </CardTitle>
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
                                            onClick={() => getTokenData(selectedToken,'usd','1','hourly')}
                                        >
                                            <span className="chart-button-text d-sm-block d-md-block d-lg-block d-xl-block">
                                            24h
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
                                            onClick={() => getTokenData(selectedToken,'usd','7','daily')}
                                        >
                                            <span className="chart-button-text d-sm-block d-md-block d-lg-block d-xl-block">
                                            7D
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
                                            onClick={() => getTokenData(selectedToken,'usd','1','monthly')}
                                        >
                                            <span className="chart-button-text d-sm-block d-md-block d-lg-block d-xl-block">
                                            3M
                                            </span>
                                            <span className="d-block d-sm-none">
                                            <i className="tim-icons icon-tap-02" />
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
                                            onClick={() => getTokenData(selectedToken,'usd','1','monthly')}
                                        >
                                            <span className="chart-button-text d-sm-block d-md-block d-lg-block d-xl-block">
                                            12M
                                            </span>
                                            <span className="d-block d-sm-none">
                                            <i className="tim-icons icon-single-02" />
                                            </span>
                                        </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                        </CardHeader>
                            <CardBody>
                                <Line 
                                        width={400}
                                        data={lineChart.data}
                                        options={lineChart.options}
                                    />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GenericPriceChart;