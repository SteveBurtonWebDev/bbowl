import React, { Component } from 'react';
import './signin.style.css';

class SignIn extends Component {
render() {
    return (
        <div>
             <div className = 'signInForm'>
                <label>
                    Name
                </label>
                <input className = 'teamNameInput' type="text" name = 'teamName' placeholder="username" />
                <label>
                    Password
                </label>  
                <input className = 'teamNameInput' type="text" name = 'teamName' placeholder="password" />
             </div>
       </div>
    );
}
}

export default SignIn;
