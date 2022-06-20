import React,{useReducer} from 'react'
import { Button,Row,Col } from 'react-bootstrap';



const initialState=0;
const reducer=(state,action)=>{
    if(action.type==="INCREMENT"){
        return state+1;
    }
    if(action.type==="DECREMENT"){
        return state-1;
    }
    if(action.type==="INCREMENTBYFIVE"){
        return state+5;
    }
    if(action.type==="DECREMENTBYFIVE"){
        return state-5;
    }
return state;
}
export default function UseRed() {
    const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div className='text-center'>
    <p>{state}</p>
    <Row>
    <Col>
    <Button  onClick={()=>dispatch({type:"INCREMENT"})}>+</Button>
    </Col>
    <Col>
    <Button  onClick={()=>dispatch({type:"DECREMENT"})}>-</Button>
    </Col>
    <Col>
    <Button  onClick={()=>dispatch({type:"INCREMENTBYFIVE"})}>+5</Button>
    </Col>
    <Col>
    <Button  onClick={()=>dispatch({type:"DECREMENTBYFIVE"})}>-5</Button>
    </Col>  

        </Row>
    </div>
  )
}
