import ButtonAppBar from "./navBar";
import NewComponent from "./classComponent";
import './style/home.css' //لربط css
import { useState } from "react";

// useEffect:
// state حاله لقيمة متغير
export default function Home(props){
    var [counter, setCounter] = useState(0);
    // increment counter
    function increment(){
        setCounter(counter+1);
    }
    // decrement
    function decrement(){
        console.log('before', counter);
        setCounter(counter-1);
        console.log('after', counter);
    }
    const newList = ["Item1", "Item2", "Item3"];
    return (
        <>
            <ButtonAppBar/>
            <NewComponent/>
            <div>
                <h1 className="title" style = {{ textAlign:"center"}}>
                    Welcome to home page {props.name}
                </h1>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>

                {newList.map((item, index) =>(
                <li key={index}>{item}</li>
                ))}
            </div>
        </>
    )
}