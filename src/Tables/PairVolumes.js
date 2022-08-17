import React, {useEffect,useState} from "react";
import {
    Table,
    Col,
  } from "react-bootstrap";

  import {
    Card,
    CardBody,
  } from "reactstrap";

const PairVolumes = () => {

    const [tokens, setTokens] = useState([]);

    const getTokens = async () => {
        await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=kujira%2Ccosmos-hub%2Cevmos%2Cjuno-network%2Cluna%2Cosmosis%2Csecret%2Cstargaze%2Cwrapped-avax%2Cweth&order=market_cap_desc&per_page=100&page=1&sparkline=false')
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

    function numberWithCommas(x) {
        if(x === null || x === 0){
            return 'no data available';
        }
        var parts = x.toString().split(".");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
        return parts.join(",");
    }


    return (
        <>
            <Col>
            <Card>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                        <th>✒Name</th>
                        <th>💲Price</th>
                        <th>🚀Market cup Rank</th>
                        <th>⚡Total Volume</th>
                        <th>📈Low 24h</th>
                        <th>📉High 24h</th>
                        <th>💰Total Supply</th>
                        <th>💵Circulating Supply</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                        tokens.map(function(token,index){
                            var total_volume = numberWithCommas(token.total_volume);
                            var supply = numberWithCommas(token.total_supply);
                            var circulating_supply = numberWithCommas(token.circulating_supply);
                            var market_cap_rank = token.market_cap_rank == null ? 'no data available' : token.market_cap_rank ;

                            return (
                                <tr key={index}>
                                    <td key={index + token.name + 1}>{token.name}</td>
                                    <td key={index + token.name + 2}>${token.current_price}</td>
                                    <td key={index + token.name + 3}>{market_cap_rank}</td>
                                    <td key={index + token.name + 4}>{total_volume}</td>
                                    <td key={index + token.name + 5}>S{token.low_24h}</td>
                                    <td key={index + token.name + 6}>S{token.high_24h}</td>
                                    <td key={index + token.name + 7}>{supply}</td>
                                    <td key={index + token.name + 8}>{circulating_supply}</td>
                                </tr>
                            )
                        })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </>
    );

}

export default PairVolumes;