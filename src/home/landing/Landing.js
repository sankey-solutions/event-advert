import React from 'react'
import { pages } from './PagesList'

import './Landing.scss'

const Card = ({ input, index, title, message }) => {
    return (
        <div className='card-container' style={{flexDirection: index%2==0? 'row' : 'row-reverse'}}>
            <div className='card-desc'>
                <h1>{title}</h1>
                <p style={{textAlign: 'left'}}>{message}</p>
            </div>
            <img src={input} />
        </div>
    )
}

function Landing() {
    return (
        <div className='container'>
            {
                pages.map( (element, index) => 
                    <Card
                        input={element.input}
                        index={index}
                        title={element.title}
                        message={element.message}
                    />
                )
            }
        </div>
    )
}

export default Landing