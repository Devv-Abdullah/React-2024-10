import {Link, useLocation} from "react-router-dom"
import {Button} from "@mui/material";
import ButtonAppBar from "./navBar"
import { useNavigate } from "react-router-dom";

export default function ProductData(props){
    const location = useLocation()
    const navigate = useNavigate()
    const product = location.state || 'not found'
    console.log(product)
    if(product === 'not found'){
        return <h1>Product not found</h1> // display a message if product date is not found in location
    }

    const updateProduct = {name:'updated', price:100, category:'updated', dis:"this is product"}
    const handelEdit = () => {
        navigate(`/`, {state:updateProduct})
    }

    return(
        <>

        <ButtonAppBar/>
        <Button onClick={handelEdit} >Home</Button>

        <h1>Product Data</h1>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.d}</p>

        </>
    )
}