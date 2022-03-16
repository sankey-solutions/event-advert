import React from 'react'
import './Countdown.scss'
import CountdownTimer from './CountdownTimerComponent';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

export default function Countdown ({ title, message, remainingTime, timeProps }) {
    let [days, hours, minutes, seconds] = timeProps

    return (
        <>
            <p className='title'>{title}</p>

            <span className='message'>{message}</span>

            <div className='cd-container'>
                <CountdownTimer
                    duration={daySeconds}
                    initialRemainingTime={remainingTime}
                    label="days"
                    timeValue={days}
                />
                <CountdownTimer
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    label="hours"
                    timeValue={hours}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                    })}
                />
                <CountdownTimer
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    label="minutes"
                    timeValue={minutes}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                    })}
                />
                <CountdownTimer
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    label="seconds"
                    timeValue={seconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > 0
                    })}
                />
            </div>
        </>
    )
}
