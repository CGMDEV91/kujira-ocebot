import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
    var limit = [1,2,3,4,5,6,7,8,9];

    return (
        <>
            <Container>
                <Row>
                    {
                        limit.map(function(item){
                            return (
                            <Col key={item} lg={4} md={6} className="pt-3 pb-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })
                    }
                    
                </Row>
            </Container>
        </>
    )
    
  };
  
  export default Home;