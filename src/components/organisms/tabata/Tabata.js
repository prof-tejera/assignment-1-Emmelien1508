import { useEffect, useState } from 'react';
import ControlButtons from '../../molecules/control-buttons/ControlButtons';

import InputButtons from '../../molecules/input-buttons/InputButtons';
import TimePanel from '../../molecules/time-panel/TimePanel';
import './Tabata.css';

export default function Tabata() {
    const [time, setTime] = useState(0);
    const [timeCount, setTimeCount] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)

    function addToTime(e) {
        if (timeCount < 6) {
            const newTime = `${time}${e.target.innerText}`
            setTime(parseInt(newTime))
            if (!newTime.startsWith("0")) {
                setTimeCount(timeCount + 1)
            }
        }
    }

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

    function handleStart() {
        setIsActive(true)
        setIsPaused(false)
    }

    function handlePauseResume() {
        setIsPaused(!isPaused)
    }

    function handleReset() {
        setTime(0)
        setTimeCount(0)
        setIsActive(false)
    }

    return (
        <div className='countdown'>
            <TimePanel time={time} countdown={true}/>
            <InputButtons addToTime={addToTime} />
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