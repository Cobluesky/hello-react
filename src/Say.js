import { useState } from 'react'

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('HI!');
    const onClickLeave = () => setMessage('BYE!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                Red
            </button>

            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                Blue
            </button>

            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                Green
            </button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;