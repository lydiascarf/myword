/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import queryString from 'query-string';

import MyBoard from '../MyBoard';
import YourBoard from '../YourBoard';


let socket;

function GamePage({ location }) {
    const N = 6;
    const ENDPOINT = 'localhost:5000';
    const [lastGame, setLastGame] = useState(null);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [goal, setGoal] = useState('OCEANS');
    const [guess, setGuess] = useState('');
    const [myGuesses, setMyGuesses] = useState([]);
    const [yourGuesses, setYourGuesses] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        setName(name);
        setRoom(room);

    }, [ENDPOINT, location.search]);

    const sendGuess = e => {
        console.log(guess);
    };

    return (
        <Container>
            <Row>
                <Col sm={7}>
                    <Row>
                        <MyBoard N={N} />
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group controlId="formGuess">
                                <Form.Control required type="text" onKeyPress={sendGuess} onChange={e => setGuess(e.target.value)} value={guess} />
                            </Form.Group>
                        </Form>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <YourBoard N={N} />
                    </Row> 
                    <Row> 
                        {lastGame && <Alert variant='primary'>{lastGame}</Alert>}
                        {messages.map((m, i) => <Alert key={i} variant={m.variant}>{m.user} - {m.text}</Alert>)} 
                    </Row> 
                </Col>
            </Row>
        </Container >
    );
}

export default GamePage;
