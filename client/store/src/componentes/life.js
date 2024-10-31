import React, {Component} from"react"
import ButtonAppBar from "./navBar";

class LifecycleDemo extends Component{
    constructor(props){
        super(props)
        this.state = { // بدي ابلش انشا ستيت موجوده عندي تابعه ل هاي الكومبونينت
            data: null,
            loading: true
        }
        console.log('constructor');
    }
    componentWillUnmount(){ //بسنخدمها من ضمن الميثود اللي تابعه ل الكومبونينت نفسها 
        console.log('componentWillUnmount');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.fetchData(); //بس تتم مرحلة الديد ماونت بشكل كامل بدك تعمل ابديت للداتا والذيس معناها انها ميثود تابعه للكلاس نفسه
    }
    fetchData(){
        setTimeout(() => {
            this.setState({
                data: 'data',
                loading: false
            });
        }, 2000); // The delay should be after the callback function 2000> milliseconds
    }
    render(){
        console.log('render');
        const {data, loading} = this.state;
        return(
            <>
            <ButtonAppBar/>
            <h1>lifecycle</h1>
            {loading ? <p>loading...</p> : <p>{data}</p>}
            </>
        )
    }
}


export default LifecycleDemo;