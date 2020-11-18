import React from "react"
import ToDoData from "./TodoData"
import ToDoItem from "./ToDoItem"
import "./components.css"
class App extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                todo:ToDoData
            }
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(id)
    {
        this.setState(prevState => {
            const updatedTodo=prevState.todo.map(todo => {
                if(todo.id===id)
                {
                    //todo.completed=!todo.completed
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })//map function closed
            return{
                todo:updatedTodo
            }
        })
        console.log("changed",id)
    }

    render()
    {
        const todoItem = this.state.todo.map(
            item=> <ToDoItem key={item.id}  item={item}  handleChange={this.handleChange}/>    
        )//map closed

        return(
            <div>
                
                {todoItem}
            </div>
        )
    }
}export default App