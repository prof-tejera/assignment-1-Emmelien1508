import { useEffect, useState } from 'react'

import ControlButtons from '../../molecules/control-buttons/ControlButtons'
import TimePanel from '../../molecules/time-panel/TimePanel'

import './Stopwatch.css'


export default function Stopwatch() {
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }

    }, [isActive, isPaused])

    function handleStart() {
        setIsActive(true)
        setIsPaused(false)
    }

    function handlePauseResume() {
        setIsPaused(!isPaused)
    }

    function handleReset() {
        setIsActive(false)
        setTime(0)
    }
    
    return (
        <div className='timer-wrapper'>
            <div className='stopwatch'>
                <div className='time-panel-wrapper'>
                    <TimePanel time={time} />
                </div>
                <ControlButtons 
                    stopwatch={true}
                    active={isActive}
                    paused={isPaused}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleReset={handleReset}
                />
            </div>
        </div>
    )
}
