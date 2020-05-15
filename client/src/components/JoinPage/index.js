import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import CreateButton from '../CreateButton';
import JoinButton from '../JoinButton';

function JoinPage() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <Container fluid>
            <Row></Row>
            <Row>
                <Col></Col>
                <Col>
                    <Form onSubmit={e => e.preventDefault()}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                        </Form.Group>
                        <CreateButton name={name} />
                        <JoinButton name={name} room={room} setRoom={setRoom} />
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            <Row></Row>
        </Container>
    );
}

export default JoinPage;