import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, islogged} from './actions/index'

function Counter(){
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.islogged)
  
  const dispatch = useDispatch();

  return(
    <div>
      <h1>Counter {counter} </h1>
      <button onClick = { () => dispatch(increment(5))}>+</button>&nbsp;
      <button onClick = { () => dispatch(decrement(1))}>-</button>&nbsp;
      {isLogged ? <button onClick = {() => dispatch(islogged()) }>Log Out</button> : <button onClick = {() => dispatch(islogged())}>Log In</button>}
      {isLogged ?  <h3>Valuable Info I shouldn't see</h3> : '' }

    </div>
  )
}

export default Counter