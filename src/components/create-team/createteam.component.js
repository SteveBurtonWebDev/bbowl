import React, { Component } from 'react';
import './createteam.style.css'


class CreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      teamRace: 'orc',
      }
  }
  

  onNameChange = (event) => {
    this.setState({teamName: event.target.value})
  }

  onRaceChange = (event) => {
    this.setState({teamRace: event.target.value})
  }

   render() {
       
    return (
        <div className = 'addTeamForm'>
            <h2>create new team</h2>
            <label>
              name {this.state.teamName}
            </label>
            <input onChange={this.onNameChange} 
            className = 'teamNameInput' type="text" name = 'teamName' placeholder="team name" />
            <label>
              race {this.state.teamRace}
            </label>  
              <select onChange={this.onRaceChange}
               defaultValue = "orc" className ='raceSelection'>
                  <option value="orc">Orc</option>
                  <option value="human">Human</option>
                  <option value="dark elf">Dark Elf</option>
              </select>
            <button
              onClick={() => {
                let teamobj = Object.assign({}, this.state);
                teamobj.teamPlayers = [];
                this.props.onAddTeam(teamobj);
              }}
              className = 'createTeamButton'>Create Team</button>
            
        </div>
    );
  }
}

export default CreateTeam;




