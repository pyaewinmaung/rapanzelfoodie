import React from 'react'

const Login = () => {



  return (
    <>
      <section id="login">
        <div className="row">
          <div className="col-md-4">
            <div className='margintops p-5'>
              <form action="">

                <h3 className="fw-bold text-center">Login</h3>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" className='form-control mb-4' placeholder='Email' />

                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' placeholder='Password' />
                <a href='#' className='text-danger mb-5 text-decoration-none fs-6'>Forget password?</a>

                <button className='btn btn-primary'>Login</button>
                <p className='text-center fs-6'>Don&#39;t have an account? <a href='#' className='text-danger'>Create here...</a> </p>

              </form>
            </div>
          </div>
          <div className="col-md-8">

          </div>
        </div>
      </section>
    </>
  )
}

export default Login