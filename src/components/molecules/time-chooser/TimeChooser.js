import Button from '../../atoms/button/Button'

import './TimeChooser.css'


export default function TimeChooser(props) {
    return (
        <div className='timechooser-panel'>
            <div className='time-buttons'>
                <div>
                    <Button classes="extra-small quantity" onClick={props.incrementMinutes}>+</Button>
                    <Button classes="small time">
                        <span className='text-xs'>min</span>
                        <span>{("0" + props.minutes).slice(-2)}</span>
                    </Button>
                    <Button classes="extra-small quantity" onClick={props.decrementMinutes}>-</Button>
                </div>
                <p>:</p>
                <div>
                    <Button classes="extra-small quantity" onClick={props.incrementSeconds}>+</Button>
                    <Button classes="small time">
                        <span className='text-xs'>sec</span>
                        <span>{("0" + props.seconds).slice(-2)}</span>
                    </Button>
                    <Button classes="extra-small quantity" onClick={props.decrementSeconds}>-</Button>
                </div>
            </div>
        </div>
    )
}