import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import PropTypes from 'prop-types';

import Body from './Body';
import Header from './Header';

function YourBoard({ N }) {
    return (
        <Container>
            <Table striped bordered hover size="sm">
                <Header N={N} />
                <Body N={N} />
            </Table>
        </Container>
    );
}

YourBoard.propTypes = {
    N: PropTypes.number.isRequired,
};

export default YourBoard;
