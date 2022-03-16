import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './Countdown.scss'

const timerProps = {
    isPlaying: true,
    size: 180,
    strokeWidth: 6,
    colors: "#FFFFFF"
};

export default function ({ renderElement, label, timeValue, ...componentProps }) {
    return (
        <div style={{ flexDirection: "row" }}>
            <div className='circle-wrapper'>
                <CountdownCircleTimer
                    {...timerProps}
                    {...componentProps}
                >
                    { ({ color }) => <span style={{ color }}> {renderTime(timeValue)} </span> }
                </CountdownCircleTimer>
            </div>
            <p className='label'>{label}</p>
        </div>
    )
}

const renderTime = (time) => {
    return (
        <div className='time-wrapper'>
            <div className="time">{time}</div>
        </div>
    );
};
