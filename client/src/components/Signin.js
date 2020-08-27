import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import './Signin.css'
import M from 'materialize-css'

const Signin = () => {
    const history = useHistory();
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const PostData = () => {
        axios.post("http://localhost:5000/api/auth/signin", {
            username,
            password
        }).then((response) => {
            if(response.data.errors){    
                M.toast({html: response.data.errors, classes:'#c62828 red darken-3'});
            } else {
                localStorage.setItem("jwt", response.data.token);
                localStorage.setItem("username", JSON.stringify(response.data.user));
                M.toast({html: 'Logged in successfully', classes:'#81c784 green lighten-2'});
                return history.push('/home')
            }
            
        })
        .catch((err) => {
            let html = "";
            const errors = JSON.parse(err.request.response);
            errors['errors'].map((error) => {
                html = html + `${error.msg}<br>`;
            })

            M.toast({html, classes:'#c62828 red darken-3'});
        })
    }

    return (
        <div className="row">
            <div className="col s12 m6 offset-m3 l4 offset-l4">
                <div className="card z-depth-0 card-box row center input-field">
                    <h3 className="center">Signin</h3>
                    <div className="input-field col s12">
                        <input value={username} placeholder="Username" id="username" onChange={ (e) => setUsername(e.target.value) } type="text" className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input value={password} placeholder="Password" id="password" type="password" onChange={ (e) => setPassword(e.target.value) } className="validate"/>
                    </div>
                    <button class="btn waves-effect waves-light #2196f3 blue" type="submit" name="action" onClick={PostData}>Signin
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signin;