import React , {Component} from "react"
class CProduct extends Component{
    constructor(props){
        super(props)
        console.log("Product ==> Constractour")
    }
    state = {
        "Names":["Younes","Zain","Azz"],
        "Number":0,
    }
    Increase = () =>{
        this.setState({"Number":this.state.Number+1})
    }
    Decrease = (num) =>{
        this.setState({"Number":this.state.Number-num})
    }

    componentDidMount(){
        console.log("Product ==> componentDidMount")
    }
    componentDidUpdate(){// Access 2 Paramters: PrevState, PrevProps
        console.log("Product ==> componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("Product ==> componentWillUnmount")
    }
    render() {
        console.log("Product ==> Render")
        // Using Css inline Style
        let Styles = { "color" : this.props.product.Age >= 20 ? "white" : "red"}
        return (
            <div className="btn btn-primary m-5">
                {this.props.children}
                <h1 className="badge text-bg-secondary m-2">Name: {this.props.product.Name}</h1>
                <h2 className="badge text-bg-secondary m-2">Age: {this.props.product.Age}</h2>
                <h3 style={Styles}> New One </h3>
                <h4 className="Block"> Outside Style Using Css File </h4>
                <ul className="list-group">
                    {this.state.Names.map(name =>(<li key={name} className="list-group-item">{name}</li>))}
                </ul>
                <div>
                    <button className="btn btn-primary" onClick={() => this.Decrease(2)}>-</button>
                    <span className="badge text-bg-secondary m-2">{this.state.Number}</span>
                    <button className="btn btn-primary" onClick={this.Increase}>+</button>
                </div>
                <i className="fas fa-trash m-2" onClick={()=>this.props.onDelete(this.props.product)}></i>
            </div>
        )
    }
}
export default  CProduct;