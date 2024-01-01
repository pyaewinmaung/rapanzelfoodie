import React from 'react'

const Login = () => {
  return (
    <>   
      <div className='mx-auto w-50 rounded shadow d-flex flex-column p-5 mt-5 mb-5'>  

            <h3 className='fw-bold text-center'>Login</h3>
            <input type="text" className='form-control mb-4' placeholder='Email'/>

            <input type="password" className='form-control' placeholder='Password'/>
            <a href='#' className='text-danger mb-5 text-decoration-none fs-6'>Forget password?</a>
            
            <button className='btn btn-primary w-25 mx-auto'>Login</button>
            <p className='text-center fs-6'>Don&#39;t have an account? <a href='#' className='text-danger'>Create here...</a> </p>
      </div>
    </>
  )
}

export default Login