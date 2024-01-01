import React from 'react'
import Banneritem from './Banneritem'


const Bannerrecipe = () => {
    return (
        <>
            <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">


                <ul className="carousel-indicators carousels-indis">
                    <li className="active" data-bs-target="#mycarousel" data-bs-slide-to="0"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">

                    <div className=" carousel-item active banners1">
                        <Banneritem title="Baked Brief" description="A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking." />
                    </div>

                    <div className="carousel-item banners2">
                        <Banneritem title="Baked Brief" description="A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking." />
                    </div>

                    <div className="carousel-item banners3">
                        <Banneritem title="Baked Brief" description="A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking." />
                    </div>

                </div>


                <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>

                <a href="#mycarousel" className='carousel-control-next' data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

                <Recipesmenu/>

            </div>

            
        </>
    )
}

export default Bannerrecipe