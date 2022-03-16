import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated as a } from "react-spring";

import { pages } from './PagesList'

import './Landing.scss'
import { useIntersection } from '../../hooks/useIntersection';

function Card({ input, index, title, message }) {
    const ref = useRef()
    const inViewport = useIntersection(ref, '-100px');

    const springImageProps = useSpring({
        opacity: !inViewport ? 0 : 1, 
        [(index % 2 === 0)?'marginRight':'marginLeft']: !inViewport ? 200:0
    })
    
    const springTextProps = useSpring({
        opacity: !inViewport ? 0 : 1,
        config: { duration: 2000 },
    })

    return (
        <div className='card-container' style={{ flexDirection: (index % 2 === 0) ? 'row' : 'row-reverse' }}>
            <a.div className='card-desc' style={springTextProps}>
                <h1>{title}</h1>
                <p style={{ textAlign: 'left' }}>{message}</p>
            </a.div>
            <a.img ref={ref} src={input} style={springImageProps} />
        </div>
    )
}

function Landing() {
    return (
        <div className='container'>
            {
                pages.map((element, index) =>
                    <Card
                        key={index}
                        index={index}
                        input={element.input}
                        title={element.title}
                        message={element.message}
                    />
                )
            }

            {/* <div>
                <p>Intrigued!! Await further Instructions to Register</p>
            </div> */}
        </div>
    )
}

export default Landing