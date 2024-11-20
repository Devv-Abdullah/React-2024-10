import ButtonAppBar from "./navBar";
import NewComponent from "./classComponent";
import './style/home.css' //لربط css
import { useState } from "react";
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {Link} from 'react-router-dom';
// import NewComponent from "./classComponent";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { useTheme } from "./theme";

// NewComponent => ما بقدر اعرف تاغ دالخلها
// useEffect:
// state حاله لقيمة متغير انا ببلش اتحكم فيه داخل الابليكيشن
export default function Home(props){
    const newList = ["Item1", "Item2", "Item3"]; //بدي اعرضهم
    var [counter, setCounter] = useState(0); // default value => 0
    var [category, setCategory] = useState('all');
    const location = useLocation()
    var Navigate = useNavigate()

    const { theme, toggleTheme } = useTheme();

    const product = location.state || 'not found'
    var allProducts =[
        {name: 'product1', price:100, category:'men', dis:'this is product 1'},
        {name: 'product2', price:100, category:'men', dis:'this is product 2'},
        {name: 'product3', price:100, category:'Children', dis:'this is product 3'},
        {name: 'product4', price:100, category:'men', dis:'this is product 4'},
        {name: 'product5', price:100, category:'Children', dis:'this is product 5'},
        {name: 'product6', price:100, category:'men', dis:'this is product 6'},
        {name: 'product7', price:100, category:'Children', dis:'this is product 7'},
    ]

    allProducts[2] = product

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

    const handelProduct = (product) => {
        Navigate(`/product`, {state:product})
    }

    var filterProducts = category === 'all'? allProducts : allProducts.filter(product => product.category === category)
    
 
    return (
        <> 
            <ButtonAppBar/>
            <NewComponent/>
            <div style={{
                background:theme === 'light'? "white": "Black"
            }}>
                <button onClick={toggleTheme}>ChangeTheme</button>
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
                    setCategory(e.target.value) // بزبط بدونها عاديe.target.value يمثل القيمة الحالية المختارة من القائمة.
                }>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="Children">Children</option>
                </select>

                {
                    filterProducts.map(product => (
                        <Card sx={{maxWidth: 345}} key={product.name}>
                    <CardMedia

                    sx={{height: 140}}
                    image="/static/images/cards/contempLative-reptile.jpg"
                    title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                        </Typography>

                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Lizards are widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <button onClick={
                            ()=>{handelProduct(product)}
                        } size='small'>Learn More</button>
                    </CardActions>
                    </Card>
                    ))
                }

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
                ))  // map ends here
                }
            </div>
        </>
    )
}