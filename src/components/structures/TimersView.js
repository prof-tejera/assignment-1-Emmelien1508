import React from "react";

import Stopwatch from '../atoms/Stopwatch';
import Countdown from "../atoms/Countdown";
import XY from '../atoms/XY';
import Tabata from '../atoms/Tabata';

import './TimersView.css';

export default function TimersView() {
    const timers = [
        { title: "Stopwatch", C: <Stopwatch /> },
        { title: "Countdown", C: <Countdown /> },
        { title: "XY", C: <XY /> },
        { title: "Tabata", C: <Tabata /> },
    ];

    return (
        <div className="timers">
            {timers.map((timer) => (
                <div className="timer" key={`timer-${timer.title}`}>
                    <div>{timer.title}</div>
                    {timer.C}
                </div>
            ))}
        </div>
    );
};