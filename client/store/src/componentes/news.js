import ButtonAppBar from "./navBar";
//add form to add age and user name and very time you add these data if shown in a new card
import {Card, CardContent, Typography} from '@mui/material'
import { useState } from "react";

export default function News(){
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const handelSubmit = (e) => {
        e.preventDefault();
        var user = {name:name, age:age};
        setUsers([...users, user])
        console.log(users);
    }

    return(
    <>
    <ButtonAppBar/>
    <div>
        <h1 style = {{color:"black", backgroundColor:"yellow", textAlign:"center"}}>
            Welcome to new Page
        </h1>
        <form id="userForm" onSubmit={handelSubmit}>
            <label>Name: </label>
            <input type="text" id="name" name="name" required value={name} onChange={(e)=>{
                setName(e.target.value) //باشر على قيمة النيم والايج
            }}/> <br/><br/>
            <label>Age: </label>
            <input type="number" id="age" name="age" required value={age} onChange={(e)=>{
                setAge(e.target.value)
            }}/>
            <br/><br/>
            <button type="submit">Submit</button>
        </form>

        {users.map((user, index)=>(
            <Card key={index}>
                <CardContent>
                    <Typography>Name: {user.name}</Typography>
                    <Typography>Age: {user.age}</Typography>
                </CardContent>
            </Card>
        ))}
    </div>
    </>
    )
}