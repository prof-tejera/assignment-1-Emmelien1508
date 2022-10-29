import { getTime } from '../../../utils/helpers'

import './TimePanel.css'


export default function TimePanel(props) {
    const { minutes, seconds, miliseconds } = getTime(props.time)
    return (
        <div className='time-panel'>
            <p className="digits">
                {("0" + minutes).slice(-2)}
            </p>
            <p>:</p>
            <p className="digits">
                {("0" + seconds).slice(-2)}
            </p>
            <p>:</p>
            <p className="digits milliseconds">
                {("0" + miliseconds).slice(-2)}
            </p>
        </div>
    )
}