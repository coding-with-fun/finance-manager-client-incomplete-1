import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Expense from './Expense';
import Income from './Income';

const Charts = () => {
    return (
        <Container>
            <Row>
                <Expense />

                <Income />
            </Row>
        </Container>
    );
};

export default Charts;
