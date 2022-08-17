import {
    Row,
    Col,
  } from "reactstrap";

const InformationBar = () => {
    return (
        <>
            <div className="information-bar mb-4 bg-light">
                <Row className="text-center pl-4 pr-4">
                    <Col md={6} className="pt-4">
                        <Row className="">
                            <Col sm={6}><h5 className="text-white mt-2">Transactions</h5></Col>
                            <Col sm={6}><div className="text-white h2">345.534.434</div></Col>
                        </Row>
                        <hr className="text-white border-bottom"></hr>
                    </Col>
                    <Col md={6} className="pt-md-4">
                        <Row className="p-0">
                            <Col sm={6}><h5 className="text-white mt-2">Avg. cost per transaction</h5></Col>
                            <Col sm={6}><div className="text-white h2">$0.00025</div></Col>
                        </Row>
                        <hr className="text-white border-bottom"></hr>
                    </Col>
                    <Col md={6} className="pb-md-4">
                        <Row>
                            <Col sm={6}><h5 className="text-white mt-2">Transactions per second</h5></Col>
                            <Col sm={6}><div className="text-white h2">1454</div></Col>
                        </Row>
                        <hr className="text-white border-none border-bottom"></hr>  
                    </Col>
                    <Col md={6} className="pb-4">
                        <Row>
                            <Col sm={6}><h5 className="text-white mt-2">Validator nodes</h5></Col>
                            <Col sm={6}><div className="text-white h2">soon...</div></Col>
                        </Row>
                        <hr className="text-white border-none  border-bottom"></hr>  
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default InformationBar;