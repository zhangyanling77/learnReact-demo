import React, { useEffect, useLayoutEffect, useState, useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
function LayoutEffect() {
    let [color, setColor] = useState('red');
    useLayoutEffect(() => { // 会在dom节点存在后调用
        alert(color);
    });
    useEffect(() => {
        console.log('当前的颜色useEffect', color);
    });
    return (
        <>
            <div id="myDiv" style={{ backgroundColor: color }}>颜色</div>
            <button onClick={() => setColor('red')}>红</button>
            <button onClick={() => setColor('yellow')}>黄</button>
            <button onClick={() => setColor('blue')}>蓝</button>
        </>
    )
}

ReactDOM.render(<LayoutEffect />, document.getElementById('root'));
