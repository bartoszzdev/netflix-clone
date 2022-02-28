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
                    <div className='card-container-02'>
                        <img className='card-img-02' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt='Cell phone' />

                        <div className='card-animation-02'>
                            <div className='card-movie-02'>
                                <img className='movie-card-animation' alt='Stranger things' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' />
                                <div className='card-animation-text'>
                                    <h4>Stranger Things</h4>
                                    <h5>Download em andamento...</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            <div className='service-item-04'>
                <div className='info-text-04'>
                    <div className='text-04'>
                        <h2>Crie perfis para crianças.</h2>
                        <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                    </div>
                </div>

                <div className='info-card-04'>
                    <img className='card-img-04' alt='' src='https://occ-0-4447-1740.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUb4fcnETtielPJer_ORwZ2iUanycANl37cr81zDaXC9Fmg9c42ofxt0yxetNltG2xUMgf2Aqimz_q1Nsv-38Ng_EjIc.png?r=1b8' />
                </div>
            </div>
        </section>
   )
}

export default Services