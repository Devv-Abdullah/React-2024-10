import ButtonAppBar from "./navBar";
import NewComponent from "./classComponent";
import './style/home.css' //لربط css
import { useState } from "react";

// NewComponent => ما بقدر اعرف تاغ دالخلها
// useEffect:
// state حاله لقيمة متغير انا ببلش اتحكم فيه داخل الابليكيشن
export default function Home(props){
    var [counter, setCounter] = useState(0); // default value => 0
    // increment counter

    // function increment(){
    //     setCounter(counter+1); // هذه هي الدالة التي نستخدمها لتغيير قيمة كاونتر كلما اردنا تغيير قيمة كاونتر نستخدم سيت كاونتر مع القيمه الجديده
    // }
        // decrement
    function decrement(){
        console.log('before', counter);
        setCounter(counter-1);
        console.log('after', counter);
    }
    const newList = ["Item1", "Item2", "Item3"]; //بدي اعرضهم
    return (
        <>
            <ButtonAppBar/>
            <NewComponent/>
            <div>
                <h1 className="title" style = {{ textAlign:"center"}}>
                    Welcome to home page {props.name}
                </h1>
                <button className="button" onClick={decrement}>-</button>
                <p id="p1">{counter}</p>
                <button className="button" onClick={() =>
                    setCounter(counter+1)
                }>+</button>

                {newList.map((item, index) => ( //map هو دالة في JavaScript تُستخدم لتكرار (loop) العناصر داخل المصفوفة newList
                <li className="item" key={index}>{item}</li> //{item} يتم إدخال العنصر الحالي من newList هنا، فيعرض محتواه (مثل "Item1", "Item2", ...).
                ))}
            </div>
        </>
    )
}