import React from "react"
import "./components.css"
class App extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                count:1}
           
        }
        this.handleClickDouble=this.handleClickDouble.bind(this)
        this.handleClickHalf=this.handleClickHalf.bind(this)
        }
    
    handleClickHalf()
    {
        this.setState((prevState)=>
        {
            return{
                count: prevState.count/2
            }
        })
    }
    handleClickDouble()
    {
        this.setState((prevState)=>{
            return{
                count: prevState.count*2
            }
        })
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button className="double_btn" onClick={this.handleClickDouble}>Double</button>   <button className="half_btn" onClick={this.handleClickHalf}>Half</button>   
            </div>
        )
    }
}export default App
