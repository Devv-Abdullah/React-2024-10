import ButtonAppBar from "./navBar";

export default function Home(){
    return (
        <>
            <ButtonAppBar/>
            <div>
                <h1 style = {{color:"blue", backgroundColor:"red"}}>
                    Welcome to home page
                </h1>
            </div>
        </>
    )
}