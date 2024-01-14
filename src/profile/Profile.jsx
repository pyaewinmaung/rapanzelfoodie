import React, { useEffect, useState } from 'react'
import { getbuyuser, getuser } from '../api/getuser';

const Profile = () => {

    const [post,setPost] = useState([]);
    const [user,setUser] = useState("");

    useEffect(() => {
        getuser()
            .then((response) => {
                if (response.status === 200) {

                    // console.log(response);
                    setUser(response.data.data);
                    // console.log("this is user",user);
                }
            })
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        getbuyuser(user.id).then((response) => {
            if (response.status === 200) {
                console.log(response);
                // setPost(response.data.data)
                // console.log(category);
            }
        }).catch(e => console.log(e))

    }, []);

  return (
    <>

    </>
  )
}

export default Profile