import React from 'react'
import Recipesmenu from '../recipes/Recipesmenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Category from '../categories/Category'
import Popular from '../popular/Popular'
import { useNavigate } from 'react-router-dom'



const Bannerrecipe = () => {

    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    if(!token){
        navigate("/login");
    }

    return (
        <>
            <div id="mycarousel" className="carousel slide carousel-fade my-5" data-bs-ride="carousel"  >
                <ul className="carousel-indicators carousels-indis">
                    <li className="active" data-bs-target="#mycarousel" data-bs-slide-to="0"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    <div className=" carousel-item active banners1">
                        <div className="carousel-caption d-none d-sm-block mb-5 visuals">
                            <div className='mb-3'>
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                            </div>
                            <h1 className="text-uppercase display-4">Baked Brief</h1>
                            <p className="lead">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>

                    <div className=" carousel-item banners2">
                        <div className="carousel-caption d-none d-sm-block mb-5 visuals">
                            <div className='mb-3'>
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                            </div>
                            <h1 className="text-uppercase display-4">hygiene food</h1>
                            <p className="lead">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>

                    <div className=" carousel-item banners3">
                        <div className="carousel-caption d-none d-sm-block mb-5 visuals">
                            <div className='mb-3'>
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                            </div>
                            <h1 className="text-uppercase display-4">Sweet Cake</h1>
                            <p className="lead">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>

                </div>


                <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>

                <a href="#mycarousel" className='carousel-control-next' data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>

            <Category/>

            <Recipesmenu />

            <Popular/>

        </>
    )
}

export default Bannerrecipe