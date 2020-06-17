import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import CreateButton from '../CreateButton';
import JoinButton from '../JoinButton';

import './styles.css';

function JoinPage() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Card className="cardHeader">
                        <Card.Body><img src="../../assets/myWord_Logo-01.png" alt="logo" className="logo" href="logo"/></Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Join In</Card.Header>
                        <Card.Body>
                            <Form onSubmit={e => e.preventDefault()}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                                </Form.Group>
                                <div className="card-text">Join your friends or create your own room to play!</div>
                                <CreateButton name={name} />
                                <JoinButton name={name} room={room} setRoom={setRoom} />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default JoinPage;
