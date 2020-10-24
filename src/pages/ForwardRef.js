import React from 'react';

const ForwardRef =  (props, ref) => {
    return <input onKeyDown={props.onKeyDown} ref={ref}/>
};

const ForwardInput = React.forwardRef(ForwardRef);

export default ForwardInput;