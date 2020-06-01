import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default class TaskTodo extends Component {
    state = {
        items:[],
        id:"",
        title:"",
        editTitle: false
    };
    
    change = (e) => {
        this.setState({
        title : e.target.value
        })
    }
    
    submit =  (e) => {
        e.preventDefault()
        
        const newItem ={
            id: this.state.id,
            title: this.state.title
        }
        const updatedItems= [...this.state.items, newItem]

        this.setState({
            items: updatedItems,
            id : newItem.id+1,
            title : ""
        })
        
    }

    handleDelete = (id) => {
        const deleteTodo = this.state.items.filter(item => item.id !==id)
        this.setState ({
            items: deleteTodo
        })
    }

    handleEdit = (id) =>{
        const deleteTodo = this.state.items.filter(item => item.id !== id);

        const selectedItem = this.state.items.find(item => item.id===id)
        console.log(selectedItem)
        this.setState ({
            items: deleteTodo,
            title: selectedItem.title,
            editTitle: true,
            id: id
        })
        
    }
                                  
    render() {
        return (
            <div>
                <AddTodo 
                item={this.state.item} 
                change={this.change}
                submit={this.submit}                                 
                />
                <ListTodo 
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                />

    </div>
    )
    }
    }
