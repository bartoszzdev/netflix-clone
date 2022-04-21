import React from 'react'
import './service01.css'

const Service01 = () => {
    return (
        <div className='service-item-01'>
            <div className='info-text-01'>
                <div className='text-01'>
                    <h2>Aproveite na TV.</h2>
                    <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                </div>
            </div>

            <div className='info-card-01'>
                <img className='card-img-01' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='TV' />

                <video className='card-video-01' autoPlay playsInline muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default Service01