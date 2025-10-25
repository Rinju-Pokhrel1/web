import React,{useContext} from 'react'
import Components1 from './components1'
import { CounterContext } from '../context/context'

const Button = ({count}) => {
        const value=useContext(CounterContext);
  return (
    
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span><Components1 count={count} /></span> I am a button
      </button>
    </div>
  )
}

export default Button
