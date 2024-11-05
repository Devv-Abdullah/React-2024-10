import ButtonAppBar from "./navBar";
import NewComponent from "./classComponent";
import './style/home.css' //لربط css
import { useState } from "react";

// NewComponent => ما بقدر اعرف تاغ دالخلها
// useEffect:
// state حاله لقيمة متغير انا ببلش اتحكم فيه داخل الابليكيشن
export default function Home(props){
    const newList = ["Item1", "Item2", "Item3"]; //بدي اعرضهم
    var [counter, setCounter] = useState(0); // default value => 0
    var [category, setCategory] = useState(0);

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
    
    var allProducts =[
        {name: 'product1', price:100, category:'men', dis:'this is product 1'},
        {name: 'product2', price:200, category:'Children', dis:'this is product 2'},
        {name: 'product3', price:100, category:'men', dis:'this is product 1'},
        {name: 'product4', price:400, category:'Children', dis:'this is product 4'},
        {name: 'product5', price:100, category:'men', dis:'this is product 1'},
        {name: 'product6', price:600, category:'Children', dis:'this is product 6'},
        {name: 'product7', price:100, category:'men', dis:'this is product 1'},
    ]

    var filterProducts = category === 'all'? allProducts : allProducts.filter(product => product.category === category)
    
 
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
                <br></br>

                <select onChange={(e) =>
                    setCategory(e.target.value)
                }>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="Children">Children</option>
                </select>

                {newList.map((item, index) => ( //map هو دالة في JavaScript تُستخدم لتكرار (loop) العناصر داخل المصفوفة newList
                <li className="item" key={index}>{item}</li> //{item} يتم إدخال العنصر الحالي من newList هنا، فيعرض محتواه (مثل "Item1", "Item2", ...).
                ))}

                {
                    filterProducts.map(product => ( // product هو ارغمنت بمثل name price catagory dis // key={product.name} بحط داخلها اشي تامميز
                    <div key={product.name}>  
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.dis}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}