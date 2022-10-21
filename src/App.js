import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from './components/organisms/navigation/Navigation';
import DocumentationView from './components/structures/documentation-view/DocumentationView';
import TimersView from './components/structures/timers-view/TimersView';


export default function App() {
    return (
        <div className="container">
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/docs" element={<DocumentationView />} />
                    <Route path="/" element={<TimersView />} />
                </Routes>
            </Router>
        </div>
    );
};