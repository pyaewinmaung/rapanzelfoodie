import React from 'react'
import dessert from '../assets/img/receipes/dessert.jpg'

const Recentimageitem = ({name}) => {
    return (
        <>
            <div className="col-6">
                <div className="dissoves">
                    <img src={dessert} alt="desert" />
                    <p class="recentnames">By Phyu Phyu</p>
                </div>
                
            </div>

        </>
    )
}

export default Recentimageitem