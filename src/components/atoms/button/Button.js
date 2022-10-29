import './Button.css'


export default function Button(props) {
    return (
        <div className={`button ${props.classes}`} onClick={props.onClick}>
            <p>{props.children}</p>
        </div>
    )
}