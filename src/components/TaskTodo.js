import React, { Component } from 'react'
import AddTodo from './AddTodo'
// import ListTodo from './ListTodo'

export default class TaskTodo extends Component {
    state = {
        todos: [{
            id:"",
            title: "",
            completed:""
        }]
      }
    
      addNewTodo = (data)=>{
        this.setState({
          todos: [...this.state.todos, data]
        })
        console.log(this.state.todos)
      }
    
      delTodo = (id) => {
        console.log('coba')
        this.setState({todos: [...this.state.todos.filter((item) => item.id !==id)]})
      }
    
    
    render() {
        return (
            <div>
              <AddTodo todos={this.state.todos} addNewTodo={this.addNewTodo}/>
              {/* <ListTodo todos={this.state.todos} delTodo={this.delTodo}/> */}
            </div>
        )
    }
}
