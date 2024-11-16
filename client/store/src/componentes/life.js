import React, {Component} from"react"
import ButtonAppBar from "./navBar";

class LifecycleDemo extends Component{
    // property (attributes)
    constructor(props){
        super(props)
        this.state = { // بدي ابلش انشا ستيت موجوده عندي تابعه ل هاي الكومبونينت
            data: null,
            loading: true
        }
        console.log('constructor');
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentWillUnmount(){ //بسنخدمها من ضمن الميثود اللي تابعه ل الكومبونينت نفسها 
        console.log('componentWillUnmount');
    }
    componentDidMount(){ //كان عندي داتا استنيت تا جاب هاي الداتا من ثم رح عرضلي اياها بعد ما عرض الكزمبزمينت اللي موجوده عندي
        console.log('componentDidMount');
        this.fetchData(); //بس تتم مرحلة الديد ماونت بشكل كامل بدك تعمل ابديت للداتا والذيس معناها انها ميثود تابعه للكلاس نفسه
    }
    fetchData(){
        setTimeout(() => {
            this.setState({
                data: [{id:1, name:'name1'}, {id:2, name:'name2'}],
                loading: false
            });
            console.log('it fitch this data')
        }, 2000); // The delay should be after the callback function 2000> milliseconds
    }

    renderTable(tableData) {
    return (
        <table border="1" style={{width: "100%", borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(item => (
                    <tr key={item.id}> {/* Add a unique key for each row */}
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

    render(){
        console.log('render');
        const {data, loading} = this.state; // بتعمل access ل state
        return(
            <>
            <ButtonAppBar/>
            <h1>lifecycle demo</h1>
            {loading ? <h4>loading...</h4> : <h4>{this.renderTable(data)}</h4>}
            </>
        )
    }
}


export default LifecycleDemo;