import './Button.css'

export default function Button(props) {
    return (
        <div className={`${props.action} button ${props.color}`} onClick={props.onClick}>
            <p>{props.action}</p>
        </div>
    )
}