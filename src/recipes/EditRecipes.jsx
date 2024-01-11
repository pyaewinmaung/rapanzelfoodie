import React from 'react'

const CreateRecipes = () => {

    const [inputData, setInputData] = useState({});

    const onHandleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <div className="col-md-6 mx-auto">
                <div className="bg-white p-5 rounded">
                    <form onSubmit={onHandleSubmit} action="" enctype="multipart/form-data" >

                        <div className='form-group mb-3'>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" id="image" className='form-control' value={inputData.image} onChange={e =>
                                setInputData({ ...inputData, image: e.target.value })
                            } />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" className='form-control' value={inputData.title} onChange={e =>
                                setInputData({ ...inputData, title: e.target.value })
                            } />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
                            {/* <textarea name="description" id="description" cols="30" rows="5" className='form-control'></textarea> */}
                            <input type="text" name="description" id="description" className='form-control' value={inputData.description} onChange={e =>
                                setInputData({ ...inputData, description: e.target.value })
                            } />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className='form-select'>
                                <option selected disabled>Choose Category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="salads">Salads</option>
                                <option value="soup">Soup</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="time">Cooking Time</label>
                            <input type="number" name="time" id="time" className='form-control' value={inputData.time} onChange={e =>
                                setInputData({ ...inputData, time: e.target.value })
                            } />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" name="amount" id="amount" className='form-control' value={inputData.amount} onChange={e =>
                                setInputData({ ...inputData, amount: e.target.value })
                            }  />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="category">Type</label>
                            <select name="category" id="category" className='form-select'>
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
        </>
    )
}

export default CreateRecipes