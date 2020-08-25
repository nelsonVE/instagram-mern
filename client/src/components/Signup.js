import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import M from 'materialize-css'

import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repassword, setRepassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");

    const PostData = () => {
        axios.post("http://localhost:5000/api/auth/signup", {
            username,
            email,
            password,
            repassword,
            birthdate
        }).then(() => {
            M.toast({html: 'User registered successfully', classes:'#81c784 green lighten-2'});
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
                    <h3 className="center">SignUp</h3>
                    <div className="input-field col s12">
                        <input value={username} placeholder="Username" id="username" onChange={ (e) => setUsername(e.target.value) } type="text" className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input value={email} placeholder="Email" id="email" type="text" onChange={ (e) => setEmail(e.target.value) } className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input value={password} placeholder="Password" id="password" type="password" onChange={ (e) => setPassword(e.target.value) } className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input value={repassword} placeholder="Repeat password" id="repassword" type="password" onChange={ (e) => setRepassword(e.target.value) } className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <DatePicker dateFormat="yyyy/MM/dd" value={birthdate} type="text" selected={birthdate} onChange={ (date) => setBirthdate(date) } placeholderText="Birthdate"/>
                    </div>
                    <button className="btn waves-effect waves-light #2196f3 blue" type="submit" name="action" onClick={PostData}>Signup
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;