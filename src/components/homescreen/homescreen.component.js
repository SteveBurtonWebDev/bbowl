import React, { Component } from 'react';
import CreateTeam from '../create-team/createteam.component.js';
import './homescreen.style.css';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: ''
        }

    }

    render() {
        const { route } = this.props;
        const  { user } = this.props;
        const { onRouteChange } = this.props;


        return (
            <div>
                <h1>{user.name}</h1> 
                {user.teams.length === 0 || route === 'create' ?
                     <CreateTeam user = {user} onAddTeam={this.props.onAddTeam}/>
                      : 
                        <div>
                            <button
                            onClick = {() => onRouteChange('create')}
                            >create new team</button>
                            <h1>{user.teams[0].teamName}</h1>
                            <h1>{user.teams[0].teamRace}</h1>
                        </div>                     
                      
                      
                      
                      }

            </div>
    

        );
    }
}

export default HomeScreen;