import React from 'react';
import './createteam.style.css'


const CreateTeam = () => {
  return (
      <div className = 'addTeamForm'>
          <label>
            team name
          </label>
          <input className = 'teamNameInput' type="text" name = 'teamName' placeholder="team name" />
          <label>
            Pick your team
            <select value = "orc" className ='raceSelection'>
                <option value="orc">Orc</option>
                <option value="human">Human</option>
                <option value="darkelf">Dark Elf</option>
            </select>
          </label>  
          <button className = 'createTeamButton' 
          >Create Team</button>
      </div>
  );
}

export default CreateTeam;




