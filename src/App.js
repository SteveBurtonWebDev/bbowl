import React, { Component } from 'react';
import SignIn from './components/signin/signin.component.js'
import CreateTeam from './components/create-team/createteam.component.js'
import './App.css';

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    name: '',
    password: '',
    teams: []
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }


  render() {
    return (
      <div className="App">
        <h1>test</h1>     
    { this.state.route === 'signin' ? <SignIn /> :
     ( this.state.route === 'create' ? <CreateTeam /> : null )}
  
      </div>
    );

  }
  
}

export default App;
