import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

function Counter() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);

    const addValue = Number(amount) || 0;

    const handleClick = () => {
        if (isNaN(amount)) {
            return;
        } else {
            dispatch(incrementByAmount(Number(amount)));
        }
    };
    const handleReset = () => {
        setAmount(0);
        dispatch(reset());
    };

    return (
        <section>
            <p>{count}</p>
            <div>
                <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} />
                {/* <button onClick={handleClick}>add amount</button> */}
                <button onClick={() => dispatch(incrementByAmount(addValue))}>add amount</button>
            </div>
            <div>
                <button onClick={handleReset} >reset</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    );
}

export default Counter;