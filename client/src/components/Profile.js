import React from 'react';
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col m4 s12 offset-m1 center">
                    <img className="avatar" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" />
                </div>
                <div className="col m6 s12 ml-2">
                    <h4>Username</h4> &nbsp;&nbsp;
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
                    <img className="item mt-5" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" alt=""/>
                    <img className="item mt-5" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" alt=""/>
                    <img className="item mt-5" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" alt=""/>
                    <img className="item mt-5" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" alt=""/>
                    <img className="item mt-5" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" alt=""/>
                    <img className="item mt-5" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" alt=""/>
                    <img className="item mt-5" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" alt=""/>
                </div>
                </div>
        </div>
    )
}

export default Profile;