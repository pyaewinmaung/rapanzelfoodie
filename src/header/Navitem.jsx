import React from 'react'

const Navitem = ({navname}) => {
  return (
    <>
        <li className="nav-item py-sm-2"><a href="#" className="nav-link mx-2 menuitems">{navname}</a></li>
    </>
  )
}

export default Navitem