import Button from '../../atoms/button/Button'
import './CountdownTimePanel.css'

export default function CountdownTimePanel(props) {
    const minutes = props.minutes === 0 ? "00" : props.minutes
    const seconds = props.seconds === 0 ? "00" : props.seconds

    return (
        <div className='countdown-panel'>
            <p>Time</p>
            <div className='time-buttons'>
                <div>
                <Button classes="small quantity" onClick={props.decrementMinutes}>-</Button>
                    <Button classes="small start">{("0" + minutes).slice(-2)}</Button>
                    <Button classes="small quantity" onClick={props.incrementMinutes}>+</Button>
                </div>
                <p>:</p>
                <div>
                    <Button classes="small quantity" onClick={props.decrementSeconds}>-</Button>
                    <Button classes="small start">{("0" + seconds).slice(-2)}</Button>
                    <Button classes="small quantity" onClick={props.incrementSeconds}>+</Button>
                </div>
                <p>:</p>
                <div>
                    <Button classes="small start">00</Button>
                </div>
            </div>
        </div>
    )
}