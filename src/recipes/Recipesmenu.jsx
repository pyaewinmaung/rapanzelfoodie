import React from 'react'
import Recipesitem from './Recipesitem'

const Recipesmenu = () => {
  return (
    <>
        <section className="py-5">
            <div className="container">

                {/* for recipies form  */}

                <div className="row">
                  <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert"/>  
                  <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert"/>   
                  <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert"/>  
                </div>

            </div>
        </section>
    </>
  )
}

export default Recipesmenu