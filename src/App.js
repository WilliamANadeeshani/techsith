import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import UseState from "./pages/UseState";
import UseMemo from "./pages/UseMemo";
import ReactRouter from "./pages/ReactRouter";
import ReduxHooks from "./pages/ReduxHooks";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";

let User = ({match}) => {
    return <h4>Logged In: {match.params.userName}</h4>
};

const store = createStore(rootReducer);

class App extends Component {
    constructor() {
        super();
        this.state = {
            pageName: "Home"
        }
    }

    render() {

        return (
            <Provider store={store}>
                <Router>
                    <div className="App-header">
                        <h1>React Basic Concepts: {this.state.pageName} </h1>
                        <Link to={"/reactRouter"}>React Router Example</Link>
                        <Link to={"/useState"}>useState Example</Link>
                        <NavLink to={"/useMemo"} activeStyle={{color : 'green'}}>useMemo Example</NavLink>
                        <Link to={"/reduxHooks"}>react redux hooks Example</Link>

                        <Route path="/reactRouter" exact strict component={ReactRouter}/>
                        <Route path="/logged/:userName" exact strict component={User}/>
                        <Route path="/logout" exact strict component={User}/>
                        <Route path="/useState" exact strict render={
                            () => {
                                return <UseState/>
                            }
                        }/>
                        <Route path="/useMemo" exact strict component={UseMemo}/>
                        <Route path="/reduxHooks" exact strict component={ReduxHooks}/>

                    </div>
                </Router>
            </Provider>

        );
    };
}

export default App;
