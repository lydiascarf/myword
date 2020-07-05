import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyBoard from '../MyBoard';
import YourBoard from '../YourBoard';
import data from '../../data/2_board.json';

function GamePage() {
    return (
        <Container> 
            <Col sm={12}>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-center">
                            My Word: {data.board.myword}
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col sm={12}>
                <Row>
                    <Col md={6}>
                        <div className="d-flex justify-content-center"> 
                            <MyBoard />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center">    
                            <YourBoard />
                        </div> 
                    </Col>
                </Row>
            </Col>        
        </Container >
    );
}

export default GamePage;
