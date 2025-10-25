import React,{useContext} from 'react'
import { CounterContext } from '../context/context'

const components1 = () => {
    const value=useContext(CounterContext);

  return (
    <div>
  {value.count}
    </div>
  )
}

export default components1
