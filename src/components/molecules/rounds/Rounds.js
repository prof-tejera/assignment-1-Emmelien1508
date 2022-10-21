import Button from '../../atoms/button/Button'
import './Rounds.css'

export default function Rounds(props) {
    return (
        <div className='rounds'>
            <p className='label'>Choose rounds:</p>
            <div className='rounds-buttons'>
                <Button classes="small quantity" onClick={props.decrement}>-</Button>
                <p className='count'>{props.rounds}</p>
                <Button classes="small quantity" onClick={props.increment}>+</Button>
            </div>
            <div className='message'>
                <p className={props.errorMessage ? "show" : ""}>The number of rounds cannot be less than 1!</p>
            </div>
            <p>We are at round: {props.rounds}</p>
        </div>
    )
}