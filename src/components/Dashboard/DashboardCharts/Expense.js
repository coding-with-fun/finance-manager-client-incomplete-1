import { Paper } from '@material-ui/core';
import { ArrowUpward as ArrowUpwardIcon } from '@material-ui/icons';
import React from 'react';
import { Col } from 'react-bootstrap';

const Expense = () => {
    return (
        <Col md={6} className="expense mt-4">
            <Paper variant="outlined">
                <p>Total Expense for current month</p>

                <p className="dashboard-amount">2000</p>

                <div className="dashboard-difference inverted">
                    <span>
                        <ArrowUpwardIcon />
                    </span>
                    10% lesser than the last month
                </div>
            </Paper>
        </Col>
    );
};

export default Expense;
