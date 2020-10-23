import React, {useState, useMemo} from 'react';
import ChildMemo from "./ChildMemo";


let UseMemo = () => {
    const [i, setI] = useState(0);
    let memoizedChild = useMemo(() => {
        return <ChildMemo/>
    }, []);

    return (<div>
        <h1>I: {i}</h1>
        <button onClick={() => setI(i +1)}>increment i</button>
        <ChildMemo/>
        {memoizedChild}
    </div>)
};

export default  UseMemo;
