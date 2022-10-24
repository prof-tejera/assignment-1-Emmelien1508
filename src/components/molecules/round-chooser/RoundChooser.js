import Button from '../../atoms/button/Button'

import './RoundChooser.css'


export default function RoundChooser(props) {
    return (
        <div className='round-chooser'>
            <p className='text-sm'>Select rounds</p>
            <div>
                <Button classes="extra-small quantity rounds" onClick={props.decrementRounds}>-</Button>
                <Button classes="small current-round">{props.totalRounds}</Button>
                <Button classes="extra-small quantity rounds" onClick={props.incrementRounds}>+</Button>
            </div>
        </div>
    )
}