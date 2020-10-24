import React, {useEffect, useRef} from 'react';
import ForwardInput from "./ForwardRef";

const UserRef = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const buttonRef = useRef();

    const effect = useEffect(()=>{
        firstNameRef.current.focus();
    }, []);

    const onKeyDownFirst = (e) => {
        e.key === "Enter" && lastNameRef.current.focus();
    };

    const onKeyDownSecond = (e) => {
        e.key === "Enter" && buttonRef.current.focus();
    };

    const onKeyDownSubmit = (e) => {
        e.key === "Enter" && alert("Are you sure?");
    };
    return(
        <React.Fragment>
            First Name: <input ref={firstNameRef} onKeyDown={onKeyDownFirst}/>
            Last Name: <ForwardInput onKeyDown={onKeyDownSecond} ref={lastNameRef}/>
            <button ref={buttonRef} onKeyDown={onKeyDownSubmit}>Submit</button>
        </React.Fragment>
    );
};

export default UserRef;