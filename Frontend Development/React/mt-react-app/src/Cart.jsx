import React , {Component} from "react"
import CProduct from "./ClassProduct"

class Cart extends Component{
    constructor(props){
        super(props)
        console.log("Cart ==> constructor")
    }
    state = {
        "NumofItems" : 3,
        "Items": [
            {id:1,"Name":"Azz","Age":20},
            {id:2,"Name":"Zain","Age":10},
            {id:3,"Name":"Asha","Age":15},
        ]
    }
    // Remove the Product Which Pass as Paramter 
    onDelete = (product) =>{
        let newItems = this.state.Items.filter((p)=>(p.id !== product.id))
        this.setState({Items:newItems})
    }
    ResetCount = ()=>{
        let clonedItems = [...this.state.Items]
        clonedItems.map(p=>{
            p.Age = 12
            return p
        })
        this.setState({Items : clonedItems})
    }
    componentDidMount(){
        console.log("Cart ==> componentDidMount")
    }
    render() {
        console.log("Cart ==> Render")
        return (
            <>
                <div>
                    <h1 className="btn btn-primary m-2"> This Cart have {this.state.NumofItems} Items</h1>
                </div>
                <button className="btn btn-primary m-2" onClick={this.ResetCount}>Reset</button>
                {this.state.Items.map(product => (
                    <CProduct product={product} key={product.id} onDelete={this.onDelete}>
                        <span> Item Num: {product.id} </span>    
                    </CProduct>
                ))}
            </>
        )
    }
}
export default Cart;