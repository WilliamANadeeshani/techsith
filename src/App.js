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
import UserRef from "./pages/UserRef";
import Concurrency from "./pages/Concurrency";
import LazyLoadAsync from "./pages/LazyLoadAsync";
import TestWithJest from "./pages/JestTesting";

let User = ({match}) => {
    return <h4>Logged In: {match.params.userName}</h4>
};

const store = createStore(rootReducer);

class App extends Component {
    render() {

        return (
            <Provider store={store}>

                <div className="App-header">
                    <h3 style={{textDecoration: 'underline'}}>React New Features</h3>
                    <Router>
                        <ol>
                            <li>ReactRouter
                                <ul>
                                    <li><Link to={"/reactRouter"}>React Router Example</Link></li>
                                </ul>
                            </li>
                            
                            <li>React Hooks
                                <ul>
                                    <li><Link to={"/useState"}>useState Example</Link></li>
                                    <li><NavLink to={"/useMemo"} activeStyle={{color: 'green'}}>useMemo Example</NavLink></li>
                                    <li><Link to={"/reduxHooks"}>react redux hooks Example</Link></li>
                                    <li><Link to={"/useRef"}>useRef / useEffect examples</Link></li>
                                </ul>
                            </li>
                            
                            <li>React Concurrency Control
                                <ul>
                                    <li><Link to={"/concurrency"}> Component Lazy Loading </Link></li>
                                    <li><Link to={"/azycLazyLoading"}> Data Lazy Loading </Link></li>
                                </ul>
                            </li>

                            <li>React Unit Testing
                                <ul>
                                    <li><Link to={"/jest"}> Unit testing with JEST </Link></li>
                                </ul>
                            </li>
                        </ol>


                        <hr className="single-article"/>

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
                        <Route path="/useRef" exact strict component={UserRef}/>
                        <Route path="/concurrency" exact strict component={Concurrency}></Route>
                        <Route path="/azycLazyLoading" exact strict component={LazyLoadAsync}></Route>
                        <Route path="/jest" exact strict component={TestWithJest}></Route>
                    </Router>

                </div>
            </Provider>

        );
    };
}

export default App;
