import React, { Component } from 'react';
import SignIn from './components/signin/signin.component.js';
import HomeScreen from './components/homescreen/homescreen.component.js';
import Register from './components/register/register.component.js';
import logo from './images/croppedimage1201631-blood-bowl-2-background.jpg';


import './App.css';

const initialState = {
  route: 'home',
  isSignedIn: false,
  user: {
    id: '1',
    name: 'steve',
    password: 'test',
    teams: [],
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }
  
  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  onAddTeam = (teamobj) => {
    const newTeams = [...this.state.user.teams];
    newTeams.push(teamobj);
    const newUser = {
      id: this.state.user.id,
      name: this.state.user.name,
      password: this.state.user.password,
      teams: newTeams
    }
    this.setState({user: newUser});
    this.onRouteChange('home');
  }

  render() {
    return (
      <div className="App">
      <img src= { logo } alt='logo' />
      { this.state.route === 'signin' ? <SignIn onRouteChange={this.onRouteChange} user={this.state.user} /> :
      (this.state.route === 'home' || this.state.route === 'create' ? <HomeScreen onAddTeam={this.onAddTeam} route={this.state.route} onRouteChange={this.onRouteChange} user={this.state.user} /> :
       (this.state.route === 'register' ? <Register /> : null))
      }
     </div>
    );

  }
  
}

export default App;
