import React from 'react'
import starts from '../../assets/images/StarryBackground/stars.png'
import twinkling from '../../assets/images/StarryBackground/twinkling.png'
import clouds from '../../assets/images/StarryBackground/clouds.png'
import './stars.scss'

const StarsBackground = () => {
    return (
        <div className="stars-background">
            <div className="stars" style={{ background: `url(${starts})` }}></div>
            <div className="twinkling" style={{ background: `url(${twinkling})` }}></div>
            <div className="clouds" style={{ background: `url(${clouds})` }}></div>
        </div>
    )
}

export { StarsBackground }
