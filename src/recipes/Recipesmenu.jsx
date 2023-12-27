import React from 'react'
import Recipesitem from './Recipesitem'

const Recipesmenu = () => {
  return (
    <>
        <section className="py-5">
            <div className="container">

                {/* for recipies form  */}

                <div className="row">
                  <Recipesitem/>  
                  <Recipesitem/>  
                  <Recipesitem/>  
                </div>

            </div>
        </section>
    </>
  )
}

export default Recipesmenu