import { useEffect, useState } from 'react';
import ControlButtons from '../../molecules/control-buttons/ControlButtons';

import CountdownTimePanel from '../../molecules/countdown-time-panel/CountdownTimePanel';
import Rounds from '../../molecules/rounds/Rounds';

import './XY.css';


export default function XY() {
    let initialTime;
    const [errorMessage, setErrorMessage] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [rounds, setRounds] = useState(1)
    const [time, setTime] = useState(60000)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

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
        if (time <= 0 && rounds > 1) {
            setTime(initialTime)
            setRounds((rounds) => rounds - 1)
        }
    }, [time, rounds, initialTime])

    function handleStart() {
        setIsActive(true)
        setIsPaused(false)
    }

    function handlePauseResume() {
        setIsPaused(!isPaused)
    }

    function handleReset() {
        setMinutes(0)
        setSeconds(0)
    }

    function incrementRounds() {
        setErrorMessage(false)
        setRounds(rounds + 1)
    }

    function decrementRounds() {
        if (rounds >= 2) {
            setRounds(rounds - 1)
        } else {
            showErrorMessage()
        }
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

    function showErrorMessage() {
        setErrorMessage(true)
        setTimeout(() => {
            setErrorMessage(false)
        }, 5000)
    }

    return (
        <div className='countdown'>
            <Rounds 
                rounds={rounds} 
                errorMessage={errorMessage} 
                increment={incrementRounds}
                decrement={decrementRounds}
            />
            <CountdownTimePanel 
                minutes={minutes}
                seconds={seconds}
                incrementMinutes={incrementMinutes}
                decrementMinutes={decrementMinutes}
                incrementSeconds={incrementSeconds}
                decrementSeconds={decrementSeconds}
            />
            <ControlButtons 
                countdown={true}
                paused={isPaused}
                active={isActive}
                handleStart={handleStart}
                handleReset={handleReset}
                handlePauseResume={handlePauseResume}
            />
        </div>
    )
}