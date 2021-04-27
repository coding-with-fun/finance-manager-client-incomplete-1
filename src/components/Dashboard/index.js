import React from 'react';
import Charts from './DashboardCharts';
import DateSelector from './DateSelector';

const Dashboard = () => {
    return (
        <div>
            <DateSelector />
            <Charts />
        </div>
    );
};

export default Dashboard;
