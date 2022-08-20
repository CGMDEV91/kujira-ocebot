import { useState, useEffect } from "react";
import {
    Row
  } from "reactstrap";

import copy from '../assets/images/copy.png';
import twitter from '../assets/images/twitter.png';

const Footer = () => {
    const [copiedAddress, setCopiedAddress] = useState(false);

    const copyKujiAddress = () => {
        var address = document.getElementById('kuji-address');
        navigator.clipboard.writeText(address.textContent);
        setCopiedAddress(true);
        setTimeout(() => {
            setCopiedAddress(false);
          }, 2000);
    }

    useEffect(() => {
        
    }, []);

    return (
        <>

            <footer className="">
                <Row>
                    <div className="col-12 text-white">
                        <Row>
                            <div className="mt-2 col-12 col-md-6">
                                <Row>
                                    <div className="mb-2 col-12 text-center">
                                        <div>Ocebot ❤️ Kujira</div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <Row className="justify-content-center align-middle">
                                            <div className="col-12 col-md-auto font-weight-bold mb-2 mt-md-1 mb-md-0">Tips:</div>
                                            <div  className="ocebot-tips col-12 col-md-auto footer-wallet">
                                                <span id="kuji-address">kujira1xlcjd5vhgnvr9xmn8kqsut966zt0a5p8ndx33s</span>
                                                <img alt="copy-address"  className="copy-address ml-2" onClick={copyKujiAddress} src={copy} />
                                                {copiedAddress && (
                                                    <div className="copied-address-notification">Copied!</div>
                                                )}
                                            </div>
                                        </Row>
                                    </div>
                                </Row>
                            </div>
                            <div className="mt-2 mt-md-4 col-12 col-md-6 text-center">
                                <img alt="twitter-logo" className="logo-twitter mr-2" src={twitter}/>
                                <a className="ocebot-twitter-link" href="https://twitter.com/OcebotKuji">OcebotKuji</a>
                                
                            </div>
                        </Row>
                    </div>
                    <div className="col-12 footer-copyright text-center py-3 text-white">© 2022 Copyright:
                        <a class="ocebot-page-link" href="https://www.ocebot.com/"> Ocebot</a>
                    </div>
                </Row>
            </footer>
        </>
    );
  };
  
  export default Footer;