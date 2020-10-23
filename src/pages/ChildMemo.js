import React, {useEffect} from 'react';

let rendererCount = 0;
let ChildMemo = () => {
    useEffect(() => {
        rendererCount++;
    });
    return (<div>
        <h5>renderer count: {rendererCount}</h5>
    </div>)
};

export default  ChildMemo;