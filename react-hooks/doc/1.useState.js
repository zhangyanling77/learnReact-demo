import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
class Counter1 extends React.Component {
    state = { number: 0 }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
            </div>
        )
    }
}

function Counter2() {
    let [state, setState] = useState({ number: 0 });
    const alertNumber = () => {
        setTimeout(() => {
            alert(state.number);
        }, 3000);
    }
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
            <button onClick={alertNumber}>alertNumber</button>
        </div>
    )
}

function Counter3() {
    let [state, setState] = useState({ number: 0 });
    function lazy() {
        setTimeout(() => {
            setState({ number: state.number + 1 })
        }, 1000);
    }
    function lazyFunction() {
        setTimeout(() => {
            setState(state => ({ number: state.number + 1 }));
            setState(state => ({ number: state.number + 1 }));
        }, 3000);
    }
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
            <button onClick={lazy}>lazy</button>
            <button onClick={lazyFunction}>lazyFunction</button>
        </div>
    )
}

function Counter4() {
    let [state, setState] = useState(function () {
        return { number: 0, name: '计数器' };
    });

    return (
        <div>
            <p>{state.name}:{state.number}</p>
            <button onClick={() => setState({ ...state, number: state.number + 1 })}>+</button>
        </div>
    )
}
function Counter5() {
    let [state, setState] = useState(function () {
        return { number: 0, name: '计数器' };
    });
    console.log('Counter5 render');
    return (
        <div>
            <p>{state.name}:{state.number}</p>
            <button onClick={() => setState({ ...state, number: state.number + 1 })}>+</button>
            <button onClick={() => setState(state)}>+</button>
        </div>
    )
}
let lastAddClick;
let lastChangeName;
function Counter6() {
    let [number, setNumber] = useState(0);
    let [name, setName] = useState('hello hooks');
    const addClick = useCallback(() => setNumber(number + 1), [number]);
    console.log(lastAddClick === addClick);
    lastAddClick = addClick;
    const changeName = useCallback(() => setName(Date.now()), [name]);
    console.log(lastChangeName === changeName);
    lastChangeName = changeName;
    return (
        <div>
            <p>{name}:{number}</p>
            <button onClick={addClick}>addClick</button>
            <button onClick={changeName}>changeName</button>
        </div>
    )
}
ReactDOM.render(<Counter6 />, document.getElementById('root'));
