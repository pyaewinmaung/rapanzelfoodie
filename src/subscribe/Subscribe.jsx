import React from 'react'
import Category from '../categories/Category'
import Recipesmenu from '../recipes/Recipesmenu'
import Popular from '../popular/Popular'

const Subscribe = () => {
    return (
        <>
            <section className='mb-5'>
                <div className='container bg-white py-5 rounded subscribes'>
                    <div className='subscribe'>
                        <h3 className='mx-5 fw-bold'>Deliciousness to your inbox!</h3>
                    
                    <div className='col-4 mt-3 mx-5'>
                        <h5 className='text-uppercase fw-bold text-center mb-4'>Subscribe </h5>
                        <p className='mb-4 text-start'>Register and get notified about all the news & updates before it gets too late.</p>
                        <div className="d-flex">
                            <input type="text" className='rounded border-0' placeholder=' Your email address' />
                            <a href="#" className="btn bg-secondary-subtle mx-1">Sign up</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Subscribe