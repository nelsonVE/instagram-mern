import React from 'react';

const Signup = () => {
    return (
        <div className="row">
            <div className="col s12 m6 offset-m3 l4 offset-l4">
                <div className="card z-depth-0 card-box row center input-field">
                    <h3 className="center">SignUp</h3>
                    <div className="input-field col s12">
                        <input placeholder="Username" id="username" type="text" className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="Email" id="email" type="text" className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="Password" id="password" type="password" className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="Repeat password" id="repassword" type="password" className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input type="text" class="datepicker"></input>
                    </div>
                    <button class="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">Signup
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;