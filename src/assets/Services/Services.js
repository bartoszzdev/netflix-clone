import React from 'react'
import './services.css'

function Services() {
    return (
        <section className='services-container'> 
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

            <div className='service-item-02'>
                <div className='info-text-02'>
                    <div className='text-02'>
                        <h2>Baixe séries para assistir offline.</h2>
                        <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                    </div>
                </div>

                <div className='info-card-02'>
                    <img className='card-img-02' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt='Cell phone' />
                </div>
            </div>
        </section>
   )
}

export default Services