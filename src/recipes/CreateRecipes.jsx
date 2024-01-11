import React, { useEffect, useState } from 'react'
import { createrecipes } from '../api/getrecipes';
import { getcategory } from '../api/getcategories';
import { useNavigate } from 'react-router-dom';


const CreateRecipes = () => {

    const [inputData, setInputData] = useState({ title: '', description: '', category_id: '1', amount: '', type: 'premium' });

    // const [image, setImage] = useState("");

    // const handleImageChange = (event) => {
    //     const selectedImage = event.target.files[0];
    //     setImage(selectedImage);
    //   };

    const [error, setError] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getcategory().then((response) => {
            if (response.status === 200) {
                // console.log(response);
                setCategory(response.data.data)
            }
        }).catch(e => console.log(e))

    }, []);

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await createrecipes(inputData);

            if (response.status === 200) {
                // alert("success");
                // console.log(response);

                navigate("/recipes");
            }

        } catch (e) {


            if (e.response.status === 422) {
                // console.log(e.response.data);
                setError(e.response.data.data);

            }

        }

        // console.log(inputData);


    }

    return (
        <>
            <section className="margintops">
                <div className="col-md-6 mx-auto">
                    <div className="bg-white p-5 rounded">
                        <form onSubmit={onHandleSubmit} action="" encType="multipart/form-data" >

                            {/* <div className='form-group mb-3'>
                                <label htmlFor="image">Image</label>
                                <input type="file" name="image" id="image" className='form-control' onChange={handleImageChange} />
                            </div> */}

                            <div className="form-group mb-3">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" className='form-control' value={inputData.title} onChange={e =>
                                    setInputData({ ...inputData, title: e.target.value })
                                } />
                                {error && error.title && <span>{error.title}</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>


                                <textarea name="description" id="description" cols="30" rows="5" className='form-control' value={inputData.description} onChange={e =>
                                    setInputData({ ...inputData, description: e.target.value })
                                } ></textarea>

                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="category">Category</label>
                                <select name="category" id="category" className='form-select' defaultValue={inputData.category_id} onChange={e => setInputData({ ...inputData, category_id: e.target.value })} >
                                    <option selected disabled>Choose Category</option>
                                    {category.length > 0 && (
                                        category.map((item, idx) =>
                                            <option key={idx} value={++idx}>{item.category_name}</option>
                                        )
                                    )}
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="amount">Amount</label>
                                <input type="text" name="amount" id="amount" className='form-control' value={inputData.amount} onChange={e =>
                                    setInputData({ ...inputData, amount: e.target.value })
                                } />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="category">Type</label>
                                <select name="category" id="category" className='form-select' value={inputData.type} onChange={e => setInputData({ ...inputData, type: e.target.value })}>
                                    <option value="free">Free</option>
                                    <option value="premium">Premium</option>
                                </select>
                            </div>

                            <div className='d-grid'>
                                <button type="submit" className='btn btn-primary'>Create Recipes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateRecipes