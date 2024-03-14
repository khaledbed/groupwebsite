// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home1 from './components/Home1'; // Import Home1 component
import Home2 from './components/Home2'; // Import Home2 component

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes> {/* Use Routes instead of Switch */}
                    <Route exact path="/" element={<Home1 />} /> {/* Use element prop */}
                    <Route exact path="/home2" element={<Home2 />} /> {/* Use element prop */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
