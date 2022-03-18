import React from 'react'
import Countdown from './countdown/Countdown';
import { useCustomCountdown } from '../hooks/useCountdown';

import './Home.scss'
import Landing from './landing/Landing';

let countDownDate = "March 17, 2022 14:07:00"

export default function Home() {
    const [ days, hours, minutes, seconds, remainingTime ] = useCustomCountdown(new Date(countDownDate));

    return (
        <div className='container'>
            {
                !(days + hours + minutes + seconds <= 0) ?
                    <Countdown
                        title="We are Coming Soon"
                        message={[
                            "Just a few more hours left to know the Next Big Event.... We are preparing something amazing and exciting for YOU.", 
                            <br />, 
                            "Stay active to be notified...",
                            <strong>Countdown begins</strong>,
                            "!!!!!!"
                        ]}
                        remainingTime={remainingTime/1000}
                        timeProps={[days, hours, minutes, seconds]}
                    />
                    :
                    <Landing />
            }
        </div>
    )
}

