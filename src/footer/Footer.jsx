import React from 'react'

const Footer = () => {
  return (
    <div>       
  <footer className="bg-warning pt-5 pb-2">
    <div className="container text-center">
      <div className='row '>
        <div className='col d-flex flex-column mt-3'>
          <h5 className='text-uppercase mb-4 fw-bold'> Quick Link </h5>
          <ul className='list-inline text-start mx-auto'>
            <li className=''><a href="#" className='text-decoration-none text-dark'>Home</a></li>
            <li className=''><a href="#" className='text-decoration-none text-dark'>Recipes</a></li>
            <li className=''><a href="#" className='text-decoration-none text-dark'>Populars</a></li>
            <li className=''><a href="#" className='text-decoration-none text-dark'>About Us</a></li>
            <li className=''><a href="#" className='text-decoration-none text-dark'>Contact</a></li>
          </ul>          
        </div>

        <div className='col mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 fw-bold'>Subscribe </h5>
            <p className='mb-4 text-start'>Register and get notified about all the news & updates before it gets too late.</p>
            <div className="d-flex">
            <input type="text" className='rounded border-0' placeholder=' Your email address'/>
            <a href="#" className="btn bg-secondary-subtle mx-1">Sign up</a> 
            </div>                     
        </div>

        <div className='col-5 mx-auto mt-3 px-3'>
          <h5 className='text-uppercase mb-4 fw-bold'>Follow Us</h5>
          <ul className='list-ulstyled list-inline mb-5'>
            <li className='list-inline-item'><a href="#" className='btn-floating fs-4 btn-sm text-dark mx-1'><i className='fab fa-facebook'></i></a></li>
            <li className='list-inline-item'><a href="#" className='btn-floating fs-4 btn-sm text-dark mx-1'><i className="fa-brands fa-linkedin"></i></a></li>
            <li className='list-inline-item'><a href="#" className='btn-floating fs-4 btn-sm text-dark mx-1'><i className='fab fa-instagram'></i></a></li>
            <li className='list-inline-item'><a href="#" className='btn-floating fs-4 btn-sm text-dark mx-1'><i className='fab fa-youtube'></i></a></li>
          </ul>
          <ul className='list-ulstyled list-inline d-flex justify-content-between'>
            <li className=''><a href="#" className='text-dark text-decoration-none fs-6 '>Terms of Service</a></li>
            <li className='border-end border-start border-dark px-3'><a href="#" className='text-dark text-decoration-none fs-6'>Privacy Policy</a></li>
            <li className=''><a href="#" className='text-dark text-decoration-none fs-6'>Accessibility Policy</a></li>
          </ul>
        </div>

        <hr className="mb-4" />

        <div className='row align-item-center'>
          <div className="text-center">
            <p>Copyright @2023 All rights reserved by:<a href="#" className='text-decoration-none fw-bold text-dark'>FoodieRapanzal</a></p>
          </div>          
        </div>
      </div>
    </div>
  </footer>
  </div>
 
  )
}

export default Footer