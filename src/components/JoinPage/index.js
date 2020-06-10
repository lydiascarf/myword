import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import CreateButton from '../CreateButton';
import JoinButton from '../JoinButton';

import './styles.css';

function JoinPage() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <Container fluid>
            <Row></Row>
            <Row>
                <Col></Col>
                <Col>
                    <div className="cardHeader">
                        <div className="card-body">
                            <img src="../../assets/myWord_Logo-01.png" alt="logo" className="logo" href="logo"/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                        Join In
                        </div>
                        <div className="card-body">
                            <Form onSubmit={e => e.preventDefault()}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                                </Form.Group>
                                <div className="card-text">Join your friends or create your own room to play!</div>
                                <CreateButton name={name} />
                                <JoinButton name={name} room={room} setRoom={setRoom} />
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row></Row>
        </Container>
    );
}

export default JoinPage;
