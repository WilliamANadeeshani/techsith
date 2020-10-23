import React, {Component} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {increaseNumber} from "../actions/actionCreators";
import {decrease_number, increase_number} from "../actions/actions";



const ReduxHooks = () => {

    //similar to mapStateToProps
    const num = useSelector((state) => {
        return state.num
    });

    //similar to mapDispatchToProps
    const dispatch = useDispatch();

    const numHandler = () => {
        return dispatch({
            type: increase_number
        });
    };

    return (
        <React.Fragment>
            <h3>Count: {num}</h3>
            <button onClick={numHandler}>increase by one</button>
            <button onClick={() => {dispatch({type: decrease_number})}}>decrease by one</button>

        </React.Fragment>
    );
};

export default ReduxHooks;

// class ReduxHooks extends Component{
//     numHandler = () => {
//         return this.props.onIncrement();
//     };
//
//     render(){
//         const {num} = this.props;
//         return (
//             <React.Fragment>
//                 <h1>current value: {num}</h1>
//                 <button onClick={this.numHandler}>increase by one</button>
//             </React.Fragment>
//         );
//     }
// }
//
// const mapStateToProps = (appState) => {
//     return {
//         num: appState.num
//     }
// }
//
// const mapDispatchToProps = {
//     onIncrement : increaseNumber
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxHooks);