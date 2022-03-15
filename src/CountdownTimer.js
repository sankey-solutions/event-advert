import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './App.css'

const timerProps = {
    isPlaying: true,
    size: 200,
    strokeWidth: 8,
    colors: "#FFFFFF"
};

export default function ({ renderElement, label, ...componentProps }) {
    return (
        <div style={{flexDirection:"row"}}>
            <div className='circle-wrapper'>
                <CountdownCircleTimer
                    {...timerProps}
                    {...componentProps}
                >
                    {renderElement}
                </CountdownCircleTimer>
            </div>
            <p className='label'>{label}</p>
        </div>
    )
}
