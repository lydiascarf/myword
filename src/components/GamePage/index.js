import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';

function GamePage() {
    return (
        <Container> 
            <Col sm={12}>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-center">
                            My Word: {data.board.blueWord}
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col sm={12}>
                <Row>
                    <Col md={6}>
                        <div className="d-flex justify-content-center"> 
                            <TurnTable isMine isBlue turnRecords={data.board.blueTurns}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center">    
                            <TurnTable turnRecords={data.board.beigeTurns}/>
                        </div> 
                    </Col>
                </Row>
            </Col>        
        </Container >
    );
}

export default GamePage;
