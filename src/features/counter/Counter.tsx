import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className='text-xs'>
        <div>This is a protopye of the counter app for redux state manamgent. Using to prove redux works atm.</div>
      <div className=''>
        <button
          className='border-2 my-3 mx-3 rounded-lg p-2 ml-36'

          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
                    className='border-2 my-3 mx-3 rounded-lg p-2'

          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <input
            className='text-black w-20 text-center ml-36'
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <br />
        <button
        className='border-2 my-3 mx-3 rounded-lg p-2'
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
            className='border-2 my-3 mx-3 rounded-lg p-2'
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
                    className='border-2 my-3 mx-3 rounded-lg p-2'

          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
