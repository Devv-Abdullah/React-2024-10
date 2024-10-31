import ButtonAppBar from "./navBar";
import NewComponent from "./classComponent";
import './style/home.css' //لربط css

export default function Home(props){
    return (
        <>
            <ButtonAppBar/>
            <NewComponent/>
            <div>
                <h1 className="title" style = {{ textAlign:"center"}}>
                    Welcome to home page {props.name}
                </h1>
            </div>
        </>
    )
}