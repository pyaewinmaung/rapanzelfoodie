import { faArrowLeft, faBellConcierge, faCircleUser, faCrown, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleterecipe } from '../api/getrecipes'
import { getuser } from '../api/getuser'

const ShowRecipes = () => {
    const [user,setUser] = useState("");

    const location = useLocation()
    const item = location.state
    // console.log(item);

    const navigate = useNavigate();

    const backHandler = () => {
        navigate(-1);
        // window.location.reload();
    }

    const editHandler = (item) => {
        navigate("/edit", { state: item });
    }

    const deleteHandler = async () => {

        try {
            // Assuming you have a recipeId for the recipe you want to delete
            const recipeIdToDelete = item.id;

            const response = await deleterecipe(recipeIdToDelete);

            if (response.status === 200) {

                navigate("/recipes");
            }
        } catch (e) {
            console.error('Error deleting recipe:', e);
        }

    }

    useEffect(() => {
		getuser().then((response) => {
		  if (response.status === 200) {
			setUser(response.data.data)
		  }
		}).catch(e => console.log(e))
	
	  }, []);



    return (
        <>
            <section className='margintops'>
                <div className='col-md-10 mx-auto'>

                    <div className="showrecipes bg-white rounded p-5 mb-4">
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <div className='d-flex justify-content-start mb-3'>
                                        <button className='btn btn-outline-secondary' onClick={backHandler}><FontAwesomeIcon icon={faArrowLeft} /></button>
                                    </div>
                                    <h2 className='text-uppercase fw-bold mb-3'>{item.title}</h2>
                                    <div className='d-flex align-items-center justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <FontAwesomeIcon icon={faCircleUser} size='2x' className='me-3' />
                                            <p className='my-auto text-capitalize fw-bold'>By : {item.user_name}</p>
                                        </div>
                                    </div>
                                    <p className='d-flex align-items-center'><FontAwesomeIcon icon={faBellConcierge} size='2x' className='me-3' /> Category : {item.category_name}</p>
                                    <p>Update Time :  </p>

                                    {
                                        item.type === "premium" ?
                                            <div className='mb-3'>
                                                <span className='text-white bg-warning rounded p-1 px-2'>Premium <FontAwesomeIcon icon={faCrown} style={{ color: "#ffffff", }} /></span>
                                            </div>
                                            :
                                            <div className='mb-3'>
                                                <span className='text-white bg-primary rounded p-1 px-2'>Free</span>
                                            </div>
                                    }

                                    <button className='btn btn-outline-danger btn-sm mb-3'>Favorite <i class="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div>
                                    <img src={item.image} alt="meal" className='w-100 rounded' />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <p className='h5 fw-bold'>{item.description}</p>
                            
                            <p>
                                {item.instruction}
                            </p>


                            {
                                item.user_id === user.id ?

                                <div className='d-flex justify-content-end gap-2'>
                                    <button className='btn btn-primary' onClick={() => editHandler(item)}>Edit</button>
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Delete
                                    </button>
                                </div>
                                : 

                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-success'>Buy</button>
                                </div>
                            }

                        </div>
                    </div>



                </div>
            </section >

            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="text-secondary modal-title fs-5" id="staticBackdropLabel">Delete Recipe</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary">
                            Are you sure to delete <span className='fw-bold h6 text-danger text-capitalize'>{item.title}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={deleteHandler} data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShowRecipes