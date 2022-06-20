import React,{useContext} from 'react'
import { Fname } from './UseCon'

export default function C3() {
    const first = useContext(Fname);
  return (
    <div>
    <h6>This is a type of greeting , {first}</h6>
        
    </div>
  )
}
