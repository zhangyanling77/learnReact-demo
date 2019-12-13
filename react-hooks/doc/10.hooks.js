import React, { useEffect, useLayoutEffect, useState, useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

// 自定义hook，必须以use开头，这是规范
// 在自定义的hook中可以使用api中已有的hook
function useCounter() {
    let [number, setNumber] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setNumber(Math.random());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    });
    return number;
}
function Counter1() {
    let number = useCounter();
    return (
        <div>
            {number}
        </div>
    )
}
function Counter2() {
    let number = useCounter();
    return (
        <div>
            {number}
        </div>
    )
}
ReactDOM.render(<><Counter1 /><Counter2 /></>, document.getElementById('root'));
