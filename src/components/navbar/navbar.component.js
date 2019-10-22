import React, {Component} from 'react';
import './navbar.style.css';

class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <div className='nav'>
                <button
                     onClick={() => {
                        this.props.onRouteChange('signin')
                      }}           
                >sign out</button>
                <h3>{this.props.userName}</h3>
            </div>
        ); 
    }

}

export default NavBar

