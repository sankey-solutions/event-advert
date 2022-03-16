import React, { useEffect, useState } from 'react'
import Countdown from './countdown/Countdown';
import { useCustomCountdown } from '../hooks/useCountdown';

import './Home.scss'
import Landing from './landing/Landing';

let countDownDate = "March 16, 2022 19:00:00"

export default function Home() {
    const [ days, hours, minutes, seconds, remainingTime ] = useCustomCountdown(new Date(countDownDate));

    return (
        <div className='container'>
            {
                !(days + hours + minutes + seconds <= 0) ?
                    <Countdown
                        title="We are Coming Soon"
                        message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque fuga tempora, aspernatur vitae deleniti mollitia voluptatibus! Dolorem, ullam? Enim explicabo maxime veniam a ex assumenda soluta optio minus. Aut."
                        remainingTime={remainingTime/1000}
                        timeProps={[days, hours, minutes, seconds]}
                    />
                    :
                    <Landing />
            }
        </div>
    )
}

