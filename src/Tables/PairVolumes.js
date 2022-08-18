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
        var parts = x.toString().split(",");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
        return parts.join(".");
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
                        <th>🚀Market cap Rank</th>
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
                            var total_volume = numberWithCommas(parseFloat(token.total_volume/100000).toFixed(3));
                            var supply = numberWithCommas(parseFloat(token.total_supply/100000).toFixed(3));
                            var circulating_supply = numberWithCommas(parseFloat(token.circulating_supply/100000).toFixed(3));
                            var price = token.name === 'Stargaze' ? numberWithCommas(token.current_price.toFixed(3)) : numberWithCommas(token.current_price);
                            var low = token.name === 'Stargaze' ? numberWithCommas(token.low_24h.toFixed(3)) : numberWithCommas(token.low_24h);
                            var high = token.name === 'Stargaze' ? numberWithCommas(token.high_24h.toFixed(3)) : numberWithCommas(token.high_24h);
                            var market_cap_rank = token.market_cap_rank === null ? 'no data available' : token.market_cap_rank ;

                            return (
                                <tr key={index}>
                                    <td key={index + token.name + 1}>{token.name}</td>
                                    <td key={index + token.name + 2}>${price}</td>
                                    <td key={index + token.name + 3}>{market_cap_rank}</td>
                                    <td key={index + token.name + 4}>{total_volume}</td>
                                    <td key={index + token.name + 5}>${low}</td>
                                    <td key={index + token.name + 6}>${high}</td>
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