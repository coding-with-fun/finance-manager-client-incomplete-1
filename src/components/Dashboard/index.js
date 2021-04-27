import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';
import React, { Fragment, useState } from 'react';
import AddTransactionModal from './AddTransactionModal';
import Charts from './DashboardCharts';
import DateSelector from './DateSelector';

const Dashboard = () => {
    const [isAddOpen, setIsAddOpen] = useState(false);

    return (
        <Fragment>
            <DateSelector />
            <Charts />

            <div className="add-transaction-icon">
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => {
                        setIsAddOpen(!isAddOpen);
                    }}
                >
                    <AddIcon />
                </Fab>
            </div>

            <AddTransactionModal open={isAddOpen} handleClose={setIsAddOpen} />
        </Fragment>
    );
};

export default Dashboard;
