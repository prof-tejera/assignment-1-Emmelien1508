import { getTime, getStopwatchTime } from '../../../utils/helpers'
import './TimePanel.css'

export default function TimePanel(props) {
    if (props.stopwatch) {
        const { minutes, seconds, miliseconds } = getStopwatchTime(props.time)
        return (
            <div className='time-panel'>
                <span className="digits">
                    {("0" + minutes).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + seconds).slice(-2)}:
                </span>
                <span className="digits milliseconds">
                    {("0" + miliseconds).slice(-2)}
                </span>
            </div>
        )
    } else if (props.countdown) {
        const { minutes, seconds, miliseconds } = getTime(props.time)
        return (
            <div className='time-panel'>
                <span className="digits">
                    {("0" + minutes).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + seconds).slice(-2)}:
                </span>
                <span className="digits milliseconds">
                    {("0" + miliseconds).slice(-2)}
                </span>
            </div>
        )
    }
}