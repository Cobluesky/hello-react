import React from 'react';

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const namesList = names.map((name, index) => <li key={index}>{name} </li>);
    return (
        <div>
            <ul>{namesList}</ul>
        </div>
    );
};

export default IterationSample;