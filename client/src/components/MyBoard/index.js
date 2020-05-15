import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import Body from './Body';
import Header from './Header';
import TurnTable from '../TurnTable';

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

export default MyBoard;
