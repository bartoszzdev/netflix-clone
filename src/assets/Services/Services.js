import React from 'react'
import './services.css'

// Service components
import Service01 from './Service01/Service01'
import Service02 from './Service02/Service02'
import Service03 from './Service03/Service03'
import Service04 from './Service04/Service04'

function Services() {
    return (
        <section className='services-container'> 
            <Service01 />
            <Service02 />
            <Service03 />
            <Service04 />
        </section>
   )
}

export default Services