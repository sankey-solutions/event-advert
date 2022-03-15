import React from 'react'
import CountdownTimer from '../CountdownTimer';

import './Home.scss'

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const renderTime = (time) => {
    return (
        <div className='time-wrapper'>
            <div className="time">{time}</div>
        </div>
    );
};

export default function Home({ title, message, endDate }) {
    const startTime = Date.now() / 1000;
    const endTime = endDate.getTime() / 1000;

    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className='container'>

            <p className='title'>{title}</p>

            <span className='message'>{message}</span>

            <div className='cd-container'>
                <CountdownTimer
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                    label="days"
                    renderElement={({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime(getTimeDays(daysDuration - elapsedTime))}
                        </span>
                    )}
                />
                <CountdownTimer
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                    })}
                    label="hours"
                    renderElement={({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime(getTimeHours(daySeconds - elapsedTime))}
                        </span>
                    )}
                />
                <CountdownTimer
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                    })}
                    label="minutes"
                    renderElement={({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime(getTimeMinutes(hourSeconds - elapsedTime))}
                        </span>
                    )}
                />
                <CountdownTimer
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > 0
                    })}
                    label="seconds"
                    renderElement={({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime(getTimeSeconds(elapsedTime))}
                        </span>
                    )}
                />
            </div>
        </div>
    )
}

