import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}