import { useEffect, useState } from "react";
import {
    Row,
    Col,
  } from "reactstrap";
import Constants from "../Global/Constants";

import {numberWithCommas} from "../Global/Helpers";

const InformationBar = () => {
    const [transactions, setTransactions] = useState();
    const [kujiraPrice, setKujiraPrice] = useState();
    const [stakedTokens, setStakedTokens] = useState();

    const getTotalTransactions = async () => {
        await fetch('https://api.kujira.app/api/txs/count')
            .then((response) => {response.json()
                .then((json) => {
                    setTransactions(json.count);
            }).catch(error => {
                console.log(error);
            })
        })
    }

    const getKujiraCurrentPrice = async () => {
        const startEndDate = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString();

        await fetch('https://api.kujira.app/api/trades/candles?contract=' + Constants.KUJI_axlUSDC + '&precision=1D&from=' + startEndDate + '&to=' + startEndDate)
            .then((response) => {response.json()
                .then((json) => {
                    var currentPrice = parseFloat(json.candles[0].open).toFixed(3);
                    setKujiraPrice(currentPrice);
            }).catch(error => {
                console.log(error);
            })
        })
    }

    function numberWithCommas(x) {
        if(x === null || x === 0){
            return 'no data available';
        }
        if(x === undefined){
            return 0;
        }
        var parts = x.toString().split(",");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
        return parts.join(".");
    }

    const getStakedTokens = async () => {

        await fetch('https://lcd.kaiyo.kujira.setten.io/cosmos/staking/v1beta1/pool')
            .then((response) => {response.json()
                .then((json) => {
                    var tokens = parseInt(json.pool.bonded_tokens/1000000);
                    tokens = numberWithCommas(tokens);
                    setStakedTokens(tokens);
            }).catch(error => {
                console.log(error);
            })
        })
    }

    useEffect(() => {
    const interval = setInterval(() => {
        getTotalTransactions();
        getKujiraCurrentPrice();
        getStakedTokens();
    }, 1000);
    return () => {
        clearInterval(interval);
    };
    }, []);

    return (
        <>
            <div className="mb-2 bg-light">
                <Row className="text-center information-bar p-4">
                    <Col md={4} className="">
                        <Row className="">
                            <Col sm={6}><h5 className="text-white mt-2">Total Transactions</h5></Col>
                            <Col sm={6}><div className="text-white h2">{numberWithCommas(transactions)}</div></Col>
                            <hr className="text-white border-none border-bottom"></hr>  
                        </Row>
                    </Col>
                    <Col md={4} className="">
                        <Row className="set-borders">
                            <Col sm={6}><h5 className="text-white mt-2">Kujira / USDC</h5></Col>
                            <Col sm={6}><div className="text-white h2">${ kujiraPrice}</div></Col>
                            <hr className="text-white border-none border-bottom"></hr>  
                        </Row>
                    </Col>
                    <Col md={4} className="">
                        <Row>
                            <Col sm={6}><h5 className="text-white mt-2">Total Staked</h5></Col>
                            <Col sm={6}><div className="text-white h2">{stakedTokens}</div></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default InformationBar;