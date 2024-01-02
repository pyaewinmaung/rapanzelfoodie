import React from 'react'
import Recipesitem from './Recipesitem'
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '../api/UserRequest';
import Title from '../components/titles/Title';
import Popular from '../popular/Popular';

const Recipesmenu = () => {

  // const { data } = useQuery({ queryKey: ['getuser'], queryFn: GetUser });
  // console.log(data.user.name);

  return (
    <>
      <section className="py-5">
        <div className="container">

          <Title titleone="Recipes" titletwo="Create your recipes"/>

          {/* for recipies form  */}

          <div className="row">
            <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />
            <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />
            <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />
          </div>

        </div>
      </section>

      <Popular/>
    </>
  )
}

export default Recipesmenu