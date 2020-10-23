import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class ReactRouter extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }

    loginHandler = () => {
        this.setState((prevState) => {
            return {
                loggedIn: !prevState.loggedIn
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <input type="button" onClick={this.loginHandler} value={(this.state.loggedIn ? "Logout" : "Login")}/>
                {(this.state.loggedIn) && <Redirect to={"/logged/Nadeeshani"}/>}
            </React.Fragment>
        )
    }
};

export default ReactRouter;