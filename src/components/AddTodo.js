import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title : ''
      };
    
      change = e => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    
      onSubmit = e => {
        e.preventDefault()
        const addNewTodo ={
          id: this.props.todos.length+1,
          title:this.state.title,
          completed: false
        }
        this.props.addNewTodo(addNewTodo)
        this.setState({
          title : ''
        })
      }
           
    render() {
        return (
            <div>
                <form>
                    <input 
                    name ="title"
                    placeholder = "Input Here" 
                    value= {this.state.title} 
                    onChange={e => this.change(e)}/>
                    <button onClick={(e)=> this.onSubmit(e)}>+</button>
                    </form>          
            </div>
        )
    }
}
