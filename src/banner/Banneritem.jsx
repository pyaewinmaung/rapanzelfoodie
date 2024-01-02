/* eslint-disable react/prop-types */
import React from 'react' 


const Banneritem = ({ title, description }) => {
    return (
        <>


            <div className="container">
                <div className="carousel-caption d-none d-sm-block mb-5 visuals">
                   
                    <h1 className="text-uppercase display-4">{title}</h1>
                    <p className="lead">{description}</p>
                </div>
            </div>

        </>
    )
}

export default Banneritem