import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import queryString from 'query-string';
import io from 'socket.io-client';

import MyBoard from '../MyBoard';
import YourBoard from '../YourBoard';

let socket;

function GamePage({ location }) {
    const N = 6;
    const ENDPOINT = 'localhost:5000';
    const [lastGame, setLastGame] = useState(null);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [goal, setGoal] = useState('oceans');
    const [guess, setGuess] = useState('');
    const [myGuesses, setMyGuesses] = useState([]);
    const [yourGuesses, setYourGuesses] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (message) => {
            setMessages(messages => [...messages, message])
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message])
        });
        socket.on('guess', (guess) => {
            setYourGuesses(ygs => [...ygs, guess]);
        })

    }, [goal]);

    const sendGuess = e => {
        if (e.key !== 'Enter') return null;
        e.preventDefault();
        if (guess && Math.abs(myGuesses.length - yourGuesses.length) <= 1) {
            socket.emit('guess', guess, (score) => {
                console.log(guess)
                const newGuess = { guess, score };
                setMyGuesses(myGuesses => [...myGuesses, newGuess], () => {
                    setGuess('')
                    console.log(myGuesses)
                });
            })
        } else if (guess) {
            console.error('ERROR: STAY IN SYNC')
            setGuess('')
        } else {
            console.error('ERROR: NO GUESS')
            setGuess('')
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <YourBoard N={N} />
                    </Row>
                    <Row>
                        {lastGame && <Alert variant='primary'>{lastGame}</Alert>}
                        {messages.map((m, i) => <Alert key={i} variant={m.variant}>{m.user} - {m.text}</Alert>)}
                    </Row>
                </Col>
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
            </Row>
        </Container >
    );
}

export default GamePage;