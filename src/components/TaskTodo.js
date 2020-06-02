import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import axios from 'axios'

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1"
let token

export default class TaskTodo extends Component {
    state = {
        data:[],
        id:"",
        name:"",
        editName: false,
        complete: false
    };
    
    change = (e) => {
        this.setState({
        name : e.target.value
        })
    }
    

    // getAllTask = async () => {
    //   token = window.localStorage.getItem("token")
    //   try {
    //     const res  = await axios.get(`${baseUrl}/tasks`, {
    //       headers:{
    //         Authorization: token
    //       }
    //     })
    //     this.setState({ data: res.data.data.token })
    //   }catch(error) {
    //     console.log(error)
    //   }
    // }
  
    // componentDidMount() {
    //   this.getAllTask()
    // }
  

    submit =  (e) => {
        e.preventDefault()
        const newTodo ={
            id: this.state.id,
            name: this.state.name
        }
        const updatedData= [...this.state.data, newTodo]

        this.setState({
            data: updatedData,
            id : newTodo.id+1,
            name : ""
        })
        
    }

    handleDelete = (id) => {
        const deleteTodo = this.state.data.filter(item => item.id !==id)
        this.setState ({
            data: deleteTodo
        })
    }

    handleEdit = (id) =>{
        const deleteTodo = this.state.data.filter(item => item.id !== id);

        const selectedItem = this.state.data.find(item => item.id===id)
        console.log(selectedItem)
        this.setState ({
            data: deleteTodo,
            name: selectedItem.name,
            editName: true,
            id: id
        })
        
    }

    handleImportant = (id) => {
      const selectedTodo = this.state.data.find(item => item.id===id)

        console.log(selectedTodo)
        console.log('tes')
        
    }

    handleCheckList = (id) => {
      this.setState({
          data:this.state.data.map(item=>{
          if(item.id === id){
            return{
              id:item.id,
              name:item.name,
              complete:!item.complete
            }
          } else {
            return item
          }
        })
      })

        // const checkList = this.state.items.filter(item=> item.id === id)
        // console.log(checkList)
        console.log('check')
        
    }
                                  
    render() {
        return (
            <div>
                <AddTodo 
                change={this.change}
                submit={this.submit} 
                name={this.state.name}                                
                />
                <ListTodo 
                data={this.state.data}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleImportant={this.handleImportant}
                handleCheckList={this.handleCheckList}
                // getAllTask={this.getAllTask}
                />
             </div>
             )
         }
    }
