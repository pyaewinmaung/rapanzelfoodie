import React from 'react'

// eslint-disable-next-line react/prop-types
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