import React from 'react'
import data from "../data/data.js"

const Products = () => {
    return (
        <>
            <div className='product'>
                <h2>Products</h2>
                <h3>Thoughtfully Packaged to Keep Energetic Day.
                    Choose Purity, Choose Quality – Choose AquaVolts.</h3>
                <section className='cardSection'>
                    {data.map((elm) => {
                        return <div key={elm.id} className='card'>
                            <img src={elm.img} alt="image" />
                            <p>{elm.detail}</p>
                        </div>
                    })}
                </section>
            </div>
        </>
    )
}

export default Products