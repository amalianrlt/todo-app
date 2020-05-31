import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default class TaskTodo extends Component {
    state = {
        items:[],
        id:"",
        item:"",
        editItem: false
    };
    
    change = (e) => {
        this.setState({
             item : e.target.value
        })
    }
    
    submit =  (e) => {
        e.preventDefault()
        
        const newItem ={
            id: this.state.id,
            title: this.state.item
        }
        
        console.log(newItem)
        
        const updatedItems= [...this.state.items, newItem]

        this.setState({
            items: updatedItems,
            id : newItem.id+1,
            item : '',
            editItem : false
        })
        
    }

    delete = (id) => {
        const deleteTodo = this.state.items.filter(item => item.id !==id)
        this.setState ({
            items: deleteTodo
        })
        console.log('delete')
        // this.setState([...this.state.items.filter((item) => item.id !==id)])
    }

    // delTodo = (id) => {
    //     console.log('coba')
    //     this.setState({items: [...this.state.items.filter((item) => item.id !==id)]})
    //   }

      setUpdate(title,id){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.map(item=>{      
          if(item.id===id){
            console.log(item.id +"    "+id)
            item.item= title;
          }
        })
        this.setState({
          items: items
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
                <button onClick={(e)=> this.submit(e)}>+</button>
                <ListTodo 
                items={this.state.items} 
                delete={this.delete}
                />
              {/* <AddTodo  addNewTodo={data => this.addNewTodo(data)}/>
                <p>{this.state.todo}</p> */}
            </div>
        )
    }
}
    
    
    //   addNewTodo = (data)=>{
        //     //   this.setState({data})
        
        //     this.setState({
            //       todos: [...this.state.todos, data]
    //     })
    //     console.log(this.state.todos)
    //   };
    
    //   delTodo = (id) => {
    //     console.log('coba')
    //     this.setState({todos: [...this.state.todos.filter((item) => item.id !==id)]})
    //   }
    
    
