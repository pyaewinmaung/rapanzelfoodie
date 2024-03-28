import React, { useEffect, useState } from "react";

import Popularitem from "./Popularitem";
import Recent from "../recent/Recent";
import Title from "../components/titles/Title";
import Button from "../components/buttons/Button";
import { getrecipes } from "../api/getrecipes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Popular = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getrecipes()
      .then((response) => {
        if (response.status === 200) {
          setPost(response.data.data);
          console.log(response);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/home");
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">            
            <div className="col-md-8 bg-white rounded">            
              <Title titleone="Popular Recipes" titletwo="Savor the Flavor, Share the Love"/>
              {post.length > 0 &&
                post.map((item) => (
                  <div className="" key={item.id}>
                    <div className="row mb-5">
                      <div className="col-6">
                        <img
                          src={item.image}
                          alt="recipe"
                          className="popularimgs"
                        />
                      </div>

                      <div className="col-6">
                        <div className="d-flex justify-content-between mb-2">
                          <div>
                            <span className="text-black-50">By : {item.user_name}</span>
                          </div>
                          <div>
                            <span>
                              {new Date(item.created_at).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                        <p className="h5 fw-bold">{item.title}</p>
                        <p className="text-muted">
                          {" "}
                          {item.description?.substring(0, 50) + "....."}
                        </p>
                        <div className="card-footer bg-white">
                          <Button name="Detail" clickname={item} />
                        </div>
                      </div>                     
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-md-4">
              <Title
                titleone="Recent Recipes"
                titletwo="A Taste of Home in Every Byte"
              />
              <Recent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
