import React from 'react'
import Title from '../components/titles/Title'

const Category = () => {
    return (
        <>

            <Title titleone="Choose Category" titletwo="Recipes Categories" />

            <div className='container'>
                <div class="category-slider">
                    <div class="category-card">
                        <img src="./assets/img/receipes/seafood.jpg" alt="category1" />
                        <div class="overlay">
                            <h5 className='text-white fw-bold'>Breakfast</h5>
                        </div>
                    </div>

                    <div class="category-card">
                        <img src="./assets/img/receipes/breakfast.jpg" alt="category1" />
                        <div class="overlay">
                            <h5 className='text-white fw-bold'>Dessert</h5>
                        </div>
                    </div>

                    <div class="category-card">
                        <img src="./assets/img/receipes/dessert.jpg" alt="category1" />
                        <div class="overlay">
                            <h5 className='text-white fw-bold'>Meal</h5>
                        </div>
                    </div>

                    <div class="category-card">
                        <img src="./assets/img/receipes/dessert2.jpg" alt="category1" />
                        <div class="overlay">
                            <h5 className='text-white fw-bold'>Soup</h5>
                        </div>
                    </div>

                    <div class="category-card">
                        <img src="./assets/img/receipes/meal.jpg" alt="category1" />
                        <div class="overlay">
                            <h5 className='text-white fw-bold'>Vegetable</h5>
                        </div>
                    </div>

                    <div class="category-card">
                        <img src="./assets/img/receipes/seafood.jpg" alt="category1" />
                        <div class="overlay">
                            <h5 className='text-white fw-bold'>Salad</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Category


