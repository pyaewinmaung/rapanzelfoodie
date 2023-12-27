import React from 'react'
import recipe1 from '../assets/img/receipes/meal.jpg'
import ButtonCo from '../conents/ButtonCo'

const Recipesitem = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 recipescards pb-3">
                    <img src={recipe1} alt="recipe1" class="recipeimgs" />
                    <div className="p-3">
                        <div class="d-flex justify-content-between mb-2">
                            <div>
                                <span>By Anna</span>
                            </div>
                            <div>
                                <span>21/2/2023</span>
                            </div>
                        </div>
                        <h3>Beef</h3>
                        <p>Figma ipsum component variatn main layer. Text team line insert</p>
                        <ButtonCo/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Recipesitem