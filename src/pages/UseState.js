import React, {useState} from 'react';

let UseState = () => {

    const [name, setName] = useState('Nadeeshani');
    const [age, setAge] = useState(20);

    return (
        <div>
            <p>
                Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                Age: {age}
            </p>
            <button onClick={() => setAge(age + 1)}>Increase age by one</button>
            <p>{name}'s age is {age}.</p>
        </div>
    );
}

export default UseState;