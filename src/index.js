/**
 * @author Harsh Patel @harsh2124
 */

import MomentUtils from '@date-io/moment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './scss/index.scss';
import store from './store';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#343a40',
        },
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Provider store={store}>
                <App />
            </Provider>
        </MuiPickersUtilsProvider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
