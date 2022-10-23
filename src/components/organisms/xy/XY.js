import { useEffect, useState } from 'react';

import ControlButtons from '../../molecules/control-buttons/ControlButtons';
import RoundChooser from '../../molecules/round-chooser/RoundChooser';
import TimeChooser from '../../molecules/time-chooser/TimeChooser';
import TimePanel from '../../molecules/time-panel/TimePanel';

import './XY.css';

export default function Countdown() {
    const [isReady, setIsReady] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(3)
    const [time, setTime] = useState(0)
    const [initialTime, setInitialTime] = useState(0)
    const [totalRounds, setTotalRounds] = useState(1)
    const [currentRound, setCurrentRound] = useState(1)

    useEffect(() => {
        let interval = null

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time - 10)
            }, 10);
            if (time <= 0) {
                if (totalRounds === 1) {
                    handleReset()
                } else {
                    setTime(initialTime)
                    setTotalRounds(totalRounds - 1)
                    setCurrentRound(currentRound + 1)
                }
            }
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval);
        };

    }, [isActive, isPaused, time, currentRound, initialTime, totalRounds])

    function handleClear() {
        setMinutes(1)
        setSeconds(0)
        setIsReady(false)
    }
    
    function handleSet() {
        setTime(minutes * 60000 + seconds * 1000)
        setInitialTime(minutes * 60000 + seconds * 1000)
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
        setCurrentRound(1)
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
        } else {
            setMinutes(0)
            setSeconds(59)
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

    function changeRounds(event) {
        const field = event.target.parentElement.previousElementSibling
        if (field.value !== "" || !isNaN(Number(field.value))) {
            setTotalRounds(parseInt(field.value))
        }
    }

    const timepanel = (
        <TimePanel time={time} />
    )

    const chooser = (
        <div>
            <RoundChooser 
                rounds={totalRounds}
                changeRounds={changeRounds}
            />
            <TimeChooser 
                minutes={minutes}
                seconds={seconds}
                incrementMinutes={incrementMinutes}
                decrementMinutes={decrementMinutes}
                incrementSeconds={incrementSeconds}
                decrementSeconds={decrementSeconds}
            /> 
        </div>
    )

    return (
        <div className='countdown'>
            {isReady ? timepanel : chooser}
            <div>We are at round {currentRound}</div>
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