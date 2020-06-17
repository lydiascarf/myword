import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

function JoinButton({ name, room, setRoom }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" className="joinButton" size="lg" block onClick={handleShow}>
                Join
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Room Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formRoom">
                        <Form.Label>Room</Form.Label>
                        <Form.Control required type="text" defaultValue="" placeholder='a1b2c3d4-e5f6' onChange={e => setRoom(e.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Link onClick={event => (!name) ? event.preventDefault() : null} to={`game?name=${name}&room=${room}`} >
                        <Button variant="primary" onClick={handleClose}>Join</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

JoinButton.propTypes = {
    name: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    setRoom: PropTypes.func.isRequired,
};

export default JoinButton;
