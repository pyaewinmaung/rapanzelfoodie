import React from 'react'
import "./button.css"

const Button = ({name}) => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn px-3 btncos" type="button">{name}</button>
            </div>
        </>
    )
}

export default Button
