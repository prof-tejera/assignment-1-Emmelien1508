import Button from '../../atoms/button/Button'
import './TimeChooser.css'

export default function TimeChooser(props) {
    return (
        <div className='countdown-panel'>
            <p>Choose time</p>
            <div className='time-buttons'>
                <div>
                <Button classes="small quantity" onClick={props.decrementMinutes}>-</Button>
                    <Button classes="small start">{("0" + props.minutes).slice(-2)}</Button>
                    <Button classes="small quantity" onClick={props.incrementMinutes}>+</Button>
                </div>
                <p>:</p>
                <div>
                    <Button classes="small quantity" onClick={props.decrementSeconds}>-</Button>
                    <Button classes="small start">{("0" + props.seconds).slice(-2)}</Button>
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