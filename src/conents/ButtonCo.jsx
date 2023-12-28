import React from 'react'

const ButtonCo = ({name}) => {
  return (
    <>
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-success px-3 btncos" type="button">{name}</button>
        </div>
    </>
  )
}

export default ButtonCo