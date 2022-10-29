import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Countdown from './components/organisms/countdown/Countdown'
import Documentation from './components/organisms/documentation/Documentation'
import Navigation from './components/structures/navigation/Navigation'
import Stopwatch from './components/organisms/stopwatch/Stopwatch'
import Tabata from './components/organisms/tabata/Tabata'
import XY from './components/organisms/xy/XY'


export default function App() {
    return (
        <div className='container'>
            <Router>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Documentation />} />
                    <Route path='/docs' element={<Documentation />} />
                    <Route path='/countdown' element={<Countdown />} />
                    <Route path='/stopwatch' element={<Stopwatch />} />
                    <Route path='/tabata' element={<Tabata />} />
                    <Route path='/xy' element={<XY />} />
                </Routes>
            </Router>
        </div>
    )
}