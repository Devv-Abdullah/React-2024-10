import React ,{useState} from 'react';
import ButtonAppBar from './navBar';

function Counter(){
    // hooks > usState
    var [count, setCount] = useState(0); // ()=>initial value
    return(
    <>
    <ButtonAppBar/>
    <h1 style = {{color:"black", backgroundColor:"blue", textAlign:"center"}}>
            you clicked this button {count} times
        </h1>
        <button onClick={() =>
            setCount(count+1)
        }>Click</button>
    </>
    )
}

export default Counter;