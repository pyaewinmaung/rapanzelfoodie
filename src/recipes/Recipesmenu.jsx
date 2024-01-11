import React, { useEffect, useState } from 'react'
import Recipesitem from './Recipesitem'
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '../api/UserRequest';
import Title from '../components/titles/Title';
import Popular from '../popular/Popular';
import { api } from '../api/api';
import CreateRecipes from './CreateRecipes';
import EditRecipes from './EditRecipes';
import { useNavigate } from 'react-router-dom';
import ShowRecipes from './ShowRecipes';
import axios from 'axios';
import { getrecipes } from '../api/getrecipes';
import Button from '../components/buttons/Button';

const Recipesmenu = () => {

  // const { data } = useQuery({ queryKey: ['getuser'], queryFn: () => api.userApi.get() });
  // console.log(data);

  const [post, setPost] = useState([]);

  // const token = localStorage.getItem('token');

  // console.log(token);

  const navigate = useNavigate();

  const buttonClick = () => {

    navigate("/create");

  }

  useEffect(() => {
    getrecipes().then((response) => {
      if (response.status === 200) {
        setPost(response.data.data)
      }
    }).catch(e => console.log(e))

  }, []);
  // function showClick(item){
  //   navigate("/show",{state: item})
  // }

  // console.log(post.data[0].title);
  // console.log(post.data[0].category.category);

  return (
    <>
      <section className="margintops">
        <div className="container">

          <div className='col-md-10 mx-auto'>
            <Title titleone="Recipes" titletwo="Create your recipes" />

            {/* for recipies form  */}

            <div>
              <button type="button" className='btn btn-primary btn-sm' onClick={buttonClick} >Create Recipes</button>
            </div>

            <div className="row">
              {/* <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" /> */}

              {post.length > 0 && (
                post.map((item) =>
                  <div className="col-lg-4 col-md-6 mb-5" key={item.id}>
                    <div className="card border-0 recipescards pb-3">
                      <img src="./../meal.jpg" alt="recipe1" className="recipeimgs" />
                      <div className="p-2">
                        <div className="d-flex justify-content-between mb-2">
                          <div>
                            <span></span>
                          </div>
                          <div>
                            <span></span>
                          </div>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        {/* <button onClick={()=>showClick(item)}/> */}
                        <Button name="Detail" clickname={item} />
                        
                      </div>
                    </div>
                  </div>
                )
              )}

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Recipesmenu