import React from "react"
import ToDoData from "./TodoData"
import ToDoItem from "./ToDoItem"

class App extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                todo:ToDoData
            }
        }
    }

    render()
    {
        const todoItem = this.state.todo.map(
            item=> <ToDoItem key={item.id}  item={item}/>    
        )//map closed

        return(
            <div>
                {todoItem}
            </div>
        )
    }
}export default App