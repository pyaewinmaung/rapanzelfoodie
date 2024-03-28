import React from "react";
import Recentimageitem from "./Recentimageitem";
import dessert from "../assets/img/receipes/dessert.jpg";
import dessert2 from "../assets/img/receipes/dessert2.jpg";
import dessert3 from "../assets/img/receipes/dessert3.jpg";
import dessert4 from "../assets/img/receipes/dessert4.jpg";
import dessert5 from "../assets/img/receipes/dessert5.jpg";
import dessert6 from "../assets/img/receipes/dessert6.jpg";
import meal from "../assets/img/receipes/meal.jpg";
import dessert7 from "../assets/img/receipes/dessert7.jpg";
import dessert8 from "../assets/img/receipes/dessert8.jpg";
import dessert9 from "../assets/img/receipes/dessert9.jpg";

const Recent = () => {
  return (
    <>
      <div className="row">
        <Recentimageitem name="Phyu Phyu" imagename={dessert} />
        <Recentimageitem name="Theingi Phwe" imagename={dessert2} />
        <Recentimageitem name="Hla Inzali" imagename={dessert3} />
        <Recentimageitem name="Saw Kweh" imagename={meal} />
        <Recentimageitem name="Phyu Sin" imagename={dessert4} />
        <Recentimageitem name="Shin Thant" imagename={dessert5} />
        <Recentimageitem name="Yadanar Moe" imagename={dessert6} />  
        <Recentimageitem name="Yu Nandar" imagename={dessert7} />      
        <Recentimageitem name="Yu Nandar" imagename={dessert8} />
        <Recentimageitem name="Yu Nandar" imagename={dessert9} />
      </div>
    </>
  );
};

export default Recent;
