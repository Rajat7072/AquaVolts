import React from 'react'
import waterDummyImg from "../images/waterDummyImg.png"

const SecondBanner = () => {
    return (
        <>
            <div className='secondBanner'>
                <section>
                    <h2>Pure Water. Pure Purpose</h2>
                    <p>Established in 2026, AquaVolts is committed to delivering safe, pure, and refreshing drinking water that people can trust every day. We believe access to quality water is not just a necessity—it is the foundation of a healthy life. With a strong focus on quality, hygiene, and responsible manufacturing, AquaVolts follows rigorous processes at every stage to ensure purity in every drop. Our vision is to build a trusted water brand that puts people, quality, and sustainability first.</p>
                </section>
                <section><img src={waterDummyImg} alt="water Dummy Image" /></section>
            </div>
        </>
    )
}

export default SecondBanner