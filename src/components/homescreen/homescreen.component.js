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
        // const { onRouteChange } = this.props;


        return (
            <div>
                <h1>{user.name}</h1> 
                {user.teams.length === 0 || route === 'create' ?
                     <CreateTeam user = {user} onAddTeam={this.props.onAddTeam}/>
                      : <h1>show teams</h1>}

            </div>
    

        );
    }
}

export default HomeScreen;