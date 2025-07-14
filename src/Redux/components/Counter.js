import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from "../Utils/utils"
const Counter = () => {

const dispatch = useDispatch()
const count = useSelector(state=>state.count.count)

  return (
    <div className='counter'>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}><h3>+</h3></button>
        <button onClick={()=>dispatch(decrement())}><h3>-</h3></button>
    </div>
  )
}

export default Counter
