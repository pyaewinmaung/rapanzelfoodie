import React from 'react'


const Recentimageitem = ({name,imagename}) => {
    return (
        <>
            <div className="col-6">
                <div className="dissoves">
                    <img src={imagename} alt="desert" />
                    <p className="recentnames">By {name}</p>
                </div>
                
            </div>

        </>
    )
}

export default Recentimageitem