import React, { useState, memo, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

function Child(props) {
//     console.log('render Child');
    return (
        <button onClick={props.addClick}>{props.data.number}</button>
    )
}

Child = memo(Child); // 缓存，记忆
let lastAddClick;
let lastData;
function App() {
    let [number, setNumber] = useState(0);
    let [name, setName] = useState('hello hooks');
    
    const addClick = useCallback(() => setNumber(number + 1), [number]);
//     console.log('lastAddClick === addClick', lastAddClick === addClick); // 每次都是一个新的引用地址，永远为false
    lastAddClick = addClick;
    const data = useMemo(() => ({ number }), [number]);
    console.log('lastData === data', lastData === data);
    lastData = data;
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <Child addClick={addClick} data={data} />
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'));
