import React from 'react'
import './service03.css'

const Service03 = () => {
    return (
        <div className='service-item-03'>
            <div className='info-text-03'>
                <div className='text-03'>
                    <h2>Assista quando quiser.</h2>
                    <p>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</p>
                </div>
            </div>

            <div className='info-card-03'>
                <img className='card-img-03' alt='Computer' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' />

                <video className='card-video-03' autoPlay playsInline muted loop>
                    <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' type='video/mp4'></source>
                </video>
            </div>
        </div>
    )
}

export default Service03