import Button from '../../atoms/button/Button'
import './RoundChooser.css'

export default function RoundChooser(props) {
    return (
        <div className='countdown-panel'>
            <p>Choose nr of rounds: {props.rounds}</p>
            <div className='time-buttons'>
                <input type="number" placeholder={props.rounds}/>
                <Button classes="start small" onClick={props.changeRounds}>Save</Button>
            </div>
        </div>
    )
}