import { useEffect, useState } from 'react'

import ControlButtons from '../../molecules/control-buttons/ControlButtons'
import RoundChooser from '../../molecules/round-chooser/RoundChooser'
import TimeChooser from '../../molecules/time-chooser/TimeChooser'
import TimePanel from '../../molecules/time-panel/TimePanel'

import './Tabata.css'


export default function Tabata() {
    const [currentRound, setCurrentRound] = useState(1)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [isReady, setIsReady] = useState(false)
    const [totalRounds, setTotalRounds] = useState(1)
    const [initialRounds, setInitialRounds] = useState(1)

    const [initialRestTime, setInitialRestTime] = useState(0)
    const [rest, setRest] = useState(true)
    const [restMinutes, setRestMinutes] = useState(0)
    const [restSeconds, setRestSeconds] = useState(3)
    const [restTime, setRestTime] = useState(0)

    const [initialWorkTime, setInitialWorkTime] = useState(0)
    const [work, setWork] = useState(false)
    const [workMinutes, setWorkMinutes] = useState(0)
    const [workSeconds, setWorkSeconds] = useState(6)
    const [workTime, setWorkTime] = useState(0)

    useEffect(() => {
        let restInterval = null
        let workInterval = null

        if (isActive && !isPaused) {
            if (rest) {
                restInterval = setInterval(() => {
                    setRestTime((restTime) => restTime - 10)
                }, 10)
                if (restTime <= 0) {
                    setRestTime(initialRestTime)
                    setRest(false)
                    setWork(true)
                }
            } else if (work) {
                workInterval = setInterval(() => {
                    setWorkTime((workTime) => workTime - 10)
                }, 10)
                if (workTime <= 0) {
                    if (totalRounds === 1) {
                        handleReset()
                    } else {
                        setWorkTime(initialWorkTime)
                        setTotalRounds(totalRounds - 1)
                        setCurrentRound(currentRound + 1)
                        setRest(true)
                        setWork(false)
                    }
                }
            }
        } else {
            clearInterval(restInterval)
            clearInterval(workInterval)
        }

        return () => {
            clearInterval(restInterval)
            clearInterval(workInterval)
        }

    }, [currentRound, initialRestTime, initialWorkTime, isActive, isPaused, rest, restTime, totalRounds, work, workTime])

    function handleClear() {
        setRestMinutes(0)
        setRestSeconds(3)

        setWorkMinutes(0)
        setWorkSeconds(6)

        setIsReady(false)
    }
    
    function handleSet() {
        setInitialRounds(totalRounds)

        setRestTime(restMinutes * 60000 + restSeconds * 1000)
        setInitialRestTime(restMinutes * 60000 + restSeconds * 1000)

        setWorkTime(workMinutes * 60000 + workSeconds * 1000)
        setInitialWorkTime(workMinutes * 60000 + workSeconds * 1000)

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
        setRestTime(0)
        setWorkTime(0)
        setIsActive(false)
        setIsPaused(true)
    }

    function incrementRestMinutes() {
        if (restMinutes < 60) {
            setRestMinutes(restMinutes + 1)
        }
    }

    function decrementRestMinutes() {
        if (restMinutes > 1) {
            setRestMinutes(restMinutes - 1)
        } else if (restSeconds > 0) {
            setRestMinutes(0)
        }
    }

    function incrementRestSeconds() {
        if (restSeconds === 59) {
            setRestMinutes(restMinutes + 1)
            setRestSeconds(0)
        } else {
            setRestSeconds(restSeconds + 1)
        }
    }

    function decrementRestSeconds() {
        if (restSeconds > 1) {
            setRestSeconds(restSeconds - 1)
        } else if (restMinutes > 0) {
            setRestSeconds(59)
            setRestMinutes(restMinutes - 1)
        }
    }

    function incrementWorkMinutes() {
        if (workMinutes < 60) {
            setWorkMinutes(workMinutes + 1)
        }
    }

    function decrementWorkMinutes() {
        if (workMinutes > 1) {
            setWorkMinutes(workMinutes - 1)
        } else if (workSeconds > 0) {
            setWorkMinutes(0)
        }
    }

    function incrementWorkSeconds() {
        if (workSeconds === 59) {
            setWorkMinutes(workMinutes + 1)
            setWorkSeconds(0)
        } else {
            setWorkSeconds(workSeconds + 1)
        }
    }

    function decrementWorkSeconds() {
        if (workSeconds > 1) {
            setWorkSeconds(workSeconds - 1)
        } else if (workMinutes > 0) {
            setWorkSeconds(59)
            setWorkMinutes(workMinutes - 1)
        }
    }

    function decrementRounds() {
        if (totalRounds > 1) {
            setTotalRounds(totalRounds - 1)
        }
    }

    function incrementRounds() {
        setTotalRounds(totalRounds + 1)
    }

    const timepanel = (
        <div className='time-panel-wrapper'>
            <p>Round {currentRound} / {initialRounds}</p>
            <div className='time-panels'>
                <div>
                    <p>Rest<span className='text-md'>🧘🏼</span></p>
                    <TimePanel time={restTime} />
                </div>
                <div>
                    <p>Work <span className='text-md'>🏋🏼</span></p>
                    <TimePanel time={workTime} />
                </div>
            </div>
        </div>
    )

    const chooser = (
        <div className='choosers'>
            <RoundChooser 
                totalRounds={totalRounds}
                decrementRounds={decrementRounds}
                incrementRounds={incrementRounds}
            />
            <div className='time-choosers'>
                <div>
                    <p>Rest</p>
                    <TimeChooser 
                        minutes={restMinutes}
                        seconds={restSeconds}
                        incrementMinutes={incrementRestMinutes}
                        decrementMinutes={decrementRestMinutes}
                        incrementSeconds={incrementRestSeconds}
                        decrementSeconds={decrementRestSeconds}
                    /> 
                </div>
                <div>
                    <p>Work</p>
                    <TimeChooser 
                        minutes={workMinutes}
                        seconds={workSeconds}
                        incrementMinutes={incrementWorkMinutes}
                        decrementMinutes={decrementWorkMinutes}
                        incrementSeconds={incrementWorkSeconds}
                        decrementSeconds={decrementWorkSeconds}
                    /> 
                </div>
            </div>
        </div>
    )

    return (
        <div className='timer-wrapper'>
            <div className='tabata'>
                {isReady ? timepanel : chooser}
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
        </div>
    )
}