import React from 'react'
import Button from '../../components/buttons/Button'


const Register = () => {
  return (
    <>
        <div className='mx-auto registers'>
            <h3 className='text-center'>Create Account</h3>

            <div className='form-group mb-3'>
                <input type="text" name='name' id='name' className="form-control p-2" placeholder='Name' />
            </div>

            <div className='form-group mb-3'>
                <input type="email" name='email' id='email' className="form-control p-2" placeholder='Email' />
            </div>

            <div className='form-group mb-3'>
                <input type="password" name='password' id='password' className="form-control p-2" placeholder='Password' />
            </div>

            <div className='form-group mb-3'>
                <input type="password" name='password' id='password' className="form-control p-2" placeholder='Comfirm Password' />
            </div>

            <Button name="Register"/>

            <p className='mt-4'>Already have an accout? <span className='text-danger'>Login Here...</span> </p>
        </div>   
    </>
  )
}

export default Register