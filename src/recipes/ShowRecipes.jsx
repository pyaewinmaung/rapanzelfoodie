import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ShowRecipes = () => {
    const location = useLocation()
    const item = location.state
    console.log(item);
    return (
        <>
            <section className='margintops'>
                <div className='col-md-10 mx-auto'>

                    <div className="showrecipes bg-white rounded p-5 mb-4">
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <img src="./../meal.jpg" alt="meal" className='w-100 rounded' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div>
                                    <h2 className='text-uppercase fw-bold'>{item.title}</h2>
                                    <div className='d-flex align-items-center'>
                                        <FontAwesomeIcon icon={faCircleUser} size='2x' className='me-3' />
                                        <p className='my-auto text-capitalize fw-bold'>{item.user_name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section >

        </>
    )
}

export default ShowRecipes