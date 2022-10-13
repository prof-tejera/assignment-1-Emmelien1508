import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/organisms/Navigation";
import DocumentationView from './components/structures/DocumentationView';
import TimersView from "./components/structures/TimersView";

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