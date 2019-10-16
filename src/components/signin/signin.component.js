import React, { Component } from 'react';
import './signin.style.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInName: '',
            signInPassword: ''
        }
    }
    
onNameChange = (event) => {
    this.setState({signInName: event.target.value})
}

onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
}

onSubmitSignIn = () => {
    if (this.props.user.name === this.state.signInName &&
         this.props.user.password === this.state.signInPassword) {
            this.props.onRouteChange('home');         
         } else {
            alert('no such user');
         }

}

render() {
    const { onRouteChange } = this.props;
    
    return (
        <div>
             <div className = 'signInForm'>
                <h2>sign in</h2>
                <label>
                    name
                </label>
                <input onChange = {this.onNameChange} 
                    className = 'signInInput' type="text" name = 'username' placeholder="username" />
                <label>
                    password
                </label>  
                <input onChange = {this.onPasswordChange} 
                className = 'signInInput' type="password" name = 'password' placeholder="password" />
                <button onClick = {this.onSubmitSignIn} className ='signInSubmit'>sign in</button>
                <p onClick = {() => onRouteChange('register')}>register</p>
            </div>
       </div>
    );
}
}

export default SignIn;
