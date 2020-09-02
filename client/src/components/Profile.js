import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from '../App'
import './Profile.css';

const Profile = () => {
    const [photos, setPhotos] = useState([]);
    const {state, dispatch} = useContext(UserContext);
    useEffect(() => {
        const userid = JSON.parse(localStorage.getItem("user"))._id;

        axios.get("http://localhost:5000/api/post/user/"+userid,{
            headers:{
                Authorization: "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then((response) => {
            if(response){
                setPhotos(response.data.posts)
            }
        })
        .catch((err) => {
            console.log(err.request);
        })
    },[])

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col m4 s12 offset-m1 center">
                    <img className="avatar" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" />
                </div>
                <div className="col m6 s12 ml-2">
                    <h4>{state ? state.username : "Loading..."}</h4> &nbsp;&nbsp;
                    <Link className="btn-border" type="submit" name="action">Edit profile</Link>
                    <br/>
                    <br/>
                    <h5 className="no-margin-left"><strong>0</strong> publicaciones</h5>
                    <h5><strong>0</strong> seguidores</h5>
                    <h5><strong>0</strong> siguiendo</h5>
                    <br/>
                    <br/>
                    Descripción de la biografía
                </div>
            </div>
            <div className="row mt-5 border-top">
                <div className="gallery col m12 s12 l12 mt-5">
                    {
                        photos.map(item => {
                            return(
                                <img key={item._id} className="item mt-5" src={item.photo} alt=""/>
                            )
                        })
                    }
                </div>
            </div>
    </div>
    )
}

export default Profile;