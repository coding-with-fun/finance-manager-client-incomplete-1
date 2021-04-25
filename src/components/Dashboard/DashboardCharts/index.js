import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Expense from './Expense';
import Income from './Income';

const Charts = () => {
    return (
        <Container>
            <Row className="chart-dashboard-container">
                <Expense />

                <Income />
            </Row>
        </Container>
    );
};

export default Charts;
