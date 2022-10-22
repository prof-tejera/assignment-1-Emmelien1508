import { useEffect, useState } from 'react';

import ControlButtons from '../../molecules/control-buttons/ControlButtons';
import TimeChooser from '../../molecules/time-chooser/TimeChooser';
import TimePanel from '../../molecules/time-panel/TimePanel';
// import TimePanel from '../../molecules/time-panel/TimePanel';

import './XY.css';

export default function Countdown() {
    const [isReady, setIsReady] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time - 10)
            }, 10);
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval);
        };

    }, [isActive, isPaused])

    useEffect(() => {
        if (time <= 0) {
            handleReset()
        }
    }, [time])

    function handleClear() {
        setMinutes(1)
        setSeconds(0)
        setIsReady(false)
    }
    
    function handleSet() {
        // convert minutes + seconds to ms!
        setTime(minutes * 60000 + seconds * 1000)
        setIsReady(true)
    }

    function handleStart() {
        setIsActive(true)
        setIsPaused(false)
    }

    function handlePauseResume() {
        setIsPaused(!isPaused)
    }

    function handleReset() {
        setTime(0)
        setIsActive(false)
        setIsPaused(true)
    }

    function incrementMinutes() {
        if (minutes < 60) {
            setMinutes(minutes + 1)
        }
    }

    function decrementMinutes() {
        if (minutes > 1) {
            setMinutes(minutes - 1)
        }
    }

    function incrementSeconds() {
        if (seconds === 59) {
            setMinutes(minutes + 1)
            setSeconds(0)
        } else {
            setSeconds(seconds + 1)
        }
    }

    function decrementSeconds() {
        if (seconds > 1) {
            setSeconds(seconds - 1)
        }
    }

    const panel = (
        isReady ? 
        <TimePanel time={time} /> :
        <TimeChooser 
            minutes={minutes}
            seconds={seconds}
            incrementMinutes={incrementMinutes}
            decrementMinutes={decrementMinutes}
            incrementSeconds={incrementSeconds}
            decrementSeconds={decrementSeconds}
        /> 
    )
    return (
        <div className='countdown'>
            {panel}
            <ControlButtons 
                countdown={true}
                paused={isPaused}
                active={isActive}
                ready={isReady}
                handleClear={handleClear}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
                handleSet={handleSet}
                handleStart={handleStart}
            />
        </div>
    )
}