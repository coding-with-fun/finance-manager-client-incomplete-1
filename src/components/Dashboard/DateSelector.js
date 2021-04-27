import { DatePicker } from '@material-ui/pickers';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DateSelector = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <Container>
            <Row>
                <Col xl={12} className="dashboard-date-selector">
                    <DatePicker
                        disableFuture
                        openTo="date"
                        format="DD/MM/YYYY"
                        label="Start Date"
                        views={['year', 'month', 'date']}
                        animateYearScrolling
                        autoOk
                        value={startDate}
                        onChange={setStartDate}
                        className="start-date"
                    />

                    <DatePicker
                        disableFuture
                        openTo="date"
                        format="DD/MM/YYYY"
                        label="End Date"
                        views={['year', 'month', 'date']}
                        animateYearScrolling
                        autoOk
                        value={endDate}
                        onChange={setEndDate}
                        className="end-date"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default DateSelector;
