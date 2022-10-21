import Button from "../../atoms/button/Button"
import './InputButtons.css'

export default function InputButtons(props) {
    return (
        <div className="input-buttons">
            <Button classes="input" onClick={props.addToTime}>9</Button>
            <Button classes="input" onClick={props.addToTime}>8</Button>
            <Button classes="input" onClick={props.addToTime}>7</Button>
            <Button classes="input" onClick={props.addToTime}>6</Button>
            <Button classes="input" onClick={props.addToTime}>5</Button>
            <Button classes="input" onClick={props.addToTime}>4</Button>
            <Button classes="input" onClick={props.addToTime}>3</Button>
            <Button classes="input" onClick={props.addToTime}>2</Button>
            <Button classes="input" onClick={props.addToTime}>1</Button>
            <Button classes="input" onClick={props.addToTime}>0</Button>
        </div>
    )
}