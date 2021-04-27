import { Paper } from '@material-ui/core';
import { ArrowUpward as ArrowUpwardIcon } from '@material-ui/icons';
import React from 'react';
import { Col } from 'react-bootstrap';

const Income = () => {
    return (
        <Col md={6} className="income mt-4">
            <Paper variant="outlined">
                <p>Total Income for current month</p>

                <p className="dashboard-amount">4000</p>

                <div className="dashboard-difference">
                    <span>
                        <ArrowUpwardIcon />
                    </span>
                    10% more than the last month
                </div>
            </Paper>
        </Col>
    );
};

export default Income;
