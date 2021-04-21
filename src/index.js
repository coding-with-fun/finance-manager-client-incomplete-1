/**
 * @author Harsh Patel @harsh2124
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './scss/index.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
        <Provider store={store}>
            <App />
        </Provider>{' '}
    </MuiThemeProvider>,
    document.getElementById('root')
);
