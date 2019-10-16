import React, { Component } from 'react';
import './createteam.style.css'


class CreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTeamName: '',
      newTeamRace: 'orc',
      newTeam: {}
      }
  }
  

  onNameChange = (event) => {
    this.setState({newTeamName: event.target.value})
  }

  onRaceChange = (event) => {
    this.setState({newTeamRace: event.target.value})
  }

   render() {
       
    return (
        <div className = 'addTeamForm'>
            <h2>create new team</h2>
            <label>
              name {this.state.newTeamName}
            </label>
            <input onChange={this.onNameChange} 
            className = 'teamNameInput' type="text" name = 'teamName' placeholder="team name" />
            <label>
              race {this.state.newTeamRace}
            </label>  
              <select onChange={this.onRaceChange}
               defaultValue = "orc" className ='raceSelection'>
                  <option value="orc">Orc</option>
                  <option value="human">Human</option>
                  <option value="dark elf">Dark Elf</option>
              </select>
            <button className = 'createTeamButton'>Create Team</button>
            
        </div>
    );
  }
}

export default CreateTeam;




