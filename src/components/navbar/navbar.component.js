import React, {Component} from 'react';
import './navbar.style.css';

class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='nav'>
                <h3>coach: </h3>
                <h3>{this.props.userName}</h3>
                <button
                    onClick={() => {
                        this.props.onRouteChange('signin')
                    }}           
                >sign out</button>
                {this.props.route === 'home' ?
                    <button
                    onClick = {() => this.props.onRouteChange('create')}
                    >new team</button> : null
                }
            </div> 
        ); 
    }

}

export default NavBar

