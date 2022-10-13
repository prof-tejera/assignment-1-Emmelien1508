import Button from "../atoms/Button";
import Panel from "../atoms/Panel";

import './Stopwatch.css';
// make cancel & start button
// once start is clicked make sure it changes to pause
// once pause is clicked make sure it goes to cancel

// inner panel is a circle with the time decreasing in the middle
// at first, this is a time picker
// once start is clicked count down

export default function Stopwatch() {
    function onClick(e) {
        e.preventDefault();
        console.log("button clicked")
    }
    return (
        <div className="stopwatch">
            <div className="stopwatch-panel">
                <Panel time="01:00"></Panel>
            </div>
            <div className="stopwatch-buttons">
                <Button action="cancel" onClick={onClick}></Button>
                <Button action="start" onClick={onClick}></Button>
            </div>
        </div>
    )
}
