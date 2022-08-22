import React, {useEffect,useState} from "react";
import {numberWithCommas} from "../Global/Helpers";
import {
    Table,
    Col,
  } from "react-bootstrap";

  import {
    Card,
    CardBody
  } from "reactstrap";

const PairVolumes = () => {

    const [tokens, setTokens] = useState([]);

    const getTokens = async () => {
        await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=kujira%2Ccosmos%2Cevmos%2Cjuno-network%2Cluna%2Cosmosis%2Csecret%2Cstargaze%2Cwrapped-avax%2Cweth&order=market_cap_desc&per_page=100&page=1&sparkline=false')
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

    return (
        <>
            <Col className="pl-0 pr-0 pl-md-3 pr-md-3">
            <Card>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                        <th>✒Name</th>
                        <th>💲Price</th>
                        <th>🚀Market cap Rank</th>
                        <th>⚡Total Volume</th>
                        <th>📈Low 24h</th>
                        <th>📉High 24h</th>
                        <th>💰Total Supply</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                        tokens.map(function(token,index){
                            var name = token.name === 'Cosmos Hub' ? 'ATOM' : token.name;
                            var total_volume = numberWithCommas(parseInt(token.total_volume));
                            var supply = numberWithCommas(parseInt(token.total_supply));
                            var price = token.name === 'Stargaze' ? numberWithCommas(token.current_price.toFixed(3)) : numberWithCommas(token.current_price);
                            var low = token.name === 'Stargaze' ? numberWithCommas(token.low_24h.toFixed(3)) : numberWithCommas(token.low_24h);
                            var high = token.name === 'Stargaze' ? numberWithCommas(token.high_24h.toFixed(3)) : numberWithCommas(token.high_24h);
                            var market_cap_rank = token.market_cap_rank === null ? 'No data available' : token.market_cap_rank ;

                            return (
                                <tr key={index}>
                                    <td key={index + token.name + 1}>{name}</td>
                                    <td key={index + token.name + 2}>${price}</td>
                                    <td key={index + token.name + 3}>{market_cap_rank}</td>
                                    <td key={index + token.name + 4}>${total_volume}</td>
                                    <td key={index + token.name + 5}>${low}</td>
                                    <td key={index + token.name + 6}>${high}</td>
                                    <td key={index + token.name + 7}>{supply}</td>
                                </tr>
                            )
                        })
                    }
                  </tbody>
                </Table>
              </CardBody>
                <p className="ml-4 text-secondary footer-table-coingecko">(Information obtained from Coingecko-API)</p>
            </Card>
          </Col>
        </>
    );

}

export default PairVolumes;