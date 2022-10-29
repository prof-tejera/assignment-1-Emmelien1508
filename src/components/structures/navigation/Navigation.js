import { Link } from 'react-router-dom'

import './Navigation.css'


export default function Navigation() {
    return (
        <div>
            <ul className='navigation-menu'>
                <li><Link to='/docs'>Documentation</Link></li>
                <li><Link to='/stopwatch'>Stopwatch</Link></li>
                <li><Link to='/countdown'>Countdown</Link></li>
                <li><Link to='/xy'>XY</Link></li>
                <li><Link to='/tabata'>Tabata</Link></li>
            </ul>
        </div>
    )
}