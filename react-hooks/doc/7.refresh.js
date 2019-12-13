import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'; 

function Counter() {
    let [state, setState] = useState({ number: 0 });
    useEffect(() => {
        document.title = state.number;
    });
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
        </div>
    )
}

function Counter2() {
    let [state, setState] = useState({ number: 0 });
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
        </div>
    )
}

function App() {
    let [visible, setVisible] = useState(true);
    return (
        <div>
            {visible && <div>visible</div>}
            <button onClick={() => setVisible(!visible)}>hide</button>
            <Counter2 />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
