import ButtonAppBar from "./navBar";
//add form to add age and user name and very time you add these data if shown in a new card
import {Card, CardContent, Typography} from '@mui/material'
import { useState } from "react";
import EffectPage from "./effect";
import { useTheme } from "./theme";
import RefComponent from "./ref";

// useTheme() تستدعي السياق (ThemeContext) للحصول على القيم.
// يتم تفكيك الكائن الذي أرجعه useTheme() إلى المتغيرين theme و toggleTheme.
// theme: يحتوي على قيمة الثيم الحالية.
// toggleTheme: دالة لتغيير الثيم.
// نستخدم {} عندما يكون الناتج كائناً (Object) ونريد استخراج خصائصه.

export default function News(){
    const {theme, toggleTheme} = useTheme(); 

    const [users, setUsers] = useState([]); // عشان كل ما اضسف يوزر ينضاف لهاي اليست
    const [name, setName] = useState("");
    const [age, setAge] = useState(); // useState(0) 
    const handelSubmit = (e) => {
        e.preventDefault();
        // var user = {name:name, age:age};
        setUsers([...users, {name, age}]) //... => prevues value القيمه القديمه تبعت المتغير 
        console.log(users);
    }

    return(
    <>
    <EffectPage/>
    <ButtonAppBar/>
    <RefComponent/>
    <div style={{
        backgroundColor:theme === 'light'?"white":"black"
    }}>
        <button onClick={toggleTheme}>ChangeTheme</button>

        <h1 style = {{color:"black", backgroundColor:"yellow", textAlign:"center"}}>
            Welcome to new Page
        </h1>
        
        <form id="userForm" onSubmit={handelSubmit}>
            <label>Name: </label>
            <input type="text" id="name" name="name" required value={name} onChange={(e)=>{ // value => تبعت target
                setName(e.target.value) //باشر على قيمة النوم والايج
            }}/> <br/><br/>
            <label>Age: </label>
            <input type="number" id="age" name="age" required value={age} onChange={(e)=>{
                setAge(e.target.value)
            }}/>
            <br/><br/>
            <button type="submit">Submit</button>
        </form>

        {users.map((user, index)=>{ // card=> هو العنصر الرئيسي الذي يعمل كوعاء (Container) يحتوي على المحتوى , CardContent=>مكوّن يُستخدم لاحتواء العناصر الداخلية للبطاقة، مثل النصوص أو الصور 
            return(
            <Card key={index}> 
                <CardContent>
                    <Typography>Name: {user.name}</Typography>
                    <Typography>Age: {user.age}</Typography>
                </CardContent>
            </Card>
            )
            })}
    </div>
    </>
    )
}