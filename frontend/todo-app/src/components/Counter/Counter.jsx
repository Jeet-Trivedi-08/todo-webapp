import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {
    
    //count : current value/state
    //setCount : function to chaneg the current value/state
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count + by);
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by);
    }

    function resetCounter() {
        setCount(0);
    }

    return (
        <>
            <span className="totalCount">{ count }</span>

            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={3} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>

            <button className="resetButton" 
                    onClick={resetCounter}
            > Reset </button>
        </>
    )
}
