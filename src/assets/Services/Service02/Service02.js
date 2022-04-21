import React from 'react'
import './service02.css'

const Service02 = () => {
    return (
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
    )
}

export default Service02