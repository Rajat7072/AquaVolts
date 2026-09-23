import React from 'react'
import panIndia from "../images/panIndia.png"

const PanIndia = () => {
    return (
        <>
            <div className='panIndia'>
                <section>
                   <h1>PAN INDIA PRESENCE</h1>
                </section>
                <section>
                    <img src={panIndia} alt="panIndia" />
                </section>
            </div>
        </>
    )
}

export default PanIndia