/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../../data/1_board.json';
import queryString from 'query-string';
import MyBoard from '../MyBoard';
import YourBoard from '../YourBoard';


let socket;

function GamePage({ location }) {
    const MaxTurnLength = 6;
    const ENDPOINT = 'localhost:5000';
    const [lastGame, setLastGame] = useState(null);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [goal, setGoal] = useState('OCEANS');
    const [guess, setGuess] = useState('');
    const [myGuesses, setMyGuesses] = useState([]);
    const [yourGuesses, setYourGuesses] = useState([]);
    const [messages, setMessages] = useState([]);
    const totalTurns = 11;
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
                            <MyBoard totalTurns={totalTurns} data={data}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center">    
                            <YourBoard totalTurns={totalTurns} data={data}/>
                        </div> 
                    </Col>
                </Row>
            </Col>        
            <Row>
                <Col>
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
