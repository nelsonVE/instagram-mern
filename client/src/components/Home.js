import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="container home row mt-5">
            <div className="col s12 m9 l9">
                <div className="card home-card z-depth-0 border-gray">
                    <div className="valign-wrapper p-2">
                        <img className="avatar-xs" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" />
                        <h5>Nelson</h5>
                    </div>
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"/>
                    </div>
                    <div className="card-content p-2">
                        <i class="small material-icons">favorite_border</i>
                        <i class="small material-icons ml-2">chat_bubble_outline</i><br/>
                        <h6>title</h6>
                        <p>This is amazing bros!!!</p>
                        <input type="text" placeholder="Add a comment"/>
                    </div>
                </div>
            </div>
            <div className="col s12 m3 l3 row valign-wrapper mt-10">
                <div className="col s12 m4 l4">
                    <img className="avatar-small" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80" />
                </div>
                <div className="col s12 m8 l8 ml-2">
                    <h5>Username</h5>
                </div>
            </div>
        </div>
    )
}

export default Home;