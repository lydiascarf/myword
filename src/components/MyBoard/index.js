import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import Body from './Body';
import Header from './Header';

function MyBoard({ N }) {
    return (
        <Container>
            <Table striped bordered hover size="sm">
                <Header N={N} />
                <Body N={N} />
            </Table>
        </Container>
    );
}

MyBoard.propTypes = {
    N: PropTypes.number.isRequired,
};

export default MyBoard;
