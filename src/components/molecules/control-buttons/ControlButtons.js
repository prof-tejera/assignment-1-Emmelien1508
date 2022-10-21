import Button from "../../atoms/button/Button"
import './ControlButtons.css';

export default function ControlButtons(props) {
    const activeButtons = (
        <div>
            <Button classes="reset" onClick={props.handleReset}>
                {props.stopwatch ? "Reset" : "Clear"}
            </Button>
            <Button classes={props.paused ? "resume" : "pause"} onClick={props.handlePauseResume}>
                {props.paused ? "Resume" : "Pause"}
            </Button> 
        </div>
    )

    const startButton = (
        <div>
            <Button classes="reset" onClick={props.handleReset}>
                {props.stopwatch ? "Reset" : "Clear"}
            </Button>
            <Button classes="start" onClick={props.handleStart}>
                Start
            </Button>
        </div>
    )

    return (
        <div className="control-buttons">
            {props.active ? activeButtons : startButton}
        </div>
    )
}