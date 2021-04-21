/**
 * @author Harsh Patel @harsh2124
 */

import React from 'react';
import Home from './components/Home';
import Topbar from './components/Topbar';

const App = () => {
    return (
        <div className="dark_theme main_container">
            <Topbar />
            <Home />
        </div>
    );
};

export default App;
