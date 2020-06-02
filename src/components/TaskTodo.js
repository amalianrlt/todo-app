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
        completed: false
    };
    
    change = (e) => {
      
        this.setState({
        name : e.target.value
        })
    }

    async componentDidMount(){
      token = localStorage.getItem("token")
      try {
        const res  = await axios.get(`${baseUrl}/tasks`, {
          headers:{
            Authorization: token
          }
        })

        this.setState({ data: res.data.data })
      }catch(error) {
        console.log(error)
      }
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
            id: this.state.data.length + 1,
            name: this.state.name,
            completed: false
        }
        let updatedTodo = [...this.state.data, newTodo]
        console.log(updatedTodo)

        this.setState({
            data: updatedTodo
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
      console.log('check', id)

      this.setState({
          data: this.state.data.map(item => {
            if(item.id === id){
              return{
                id:item.id,
                name:item.name,
                completed: !item.completed
              }
            } else {
              return item
            }
        })
      })

        // const checkList = this.state.data.filter(item=> item.id === id)
        // console.log(checkList)
      
        
    }
                                  
    render() {
        return (
            <div>
                <div>
                  {this.getAllTask}
                </div>
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
                getAllTask={this.getAllTask}
                />
             </div>
             )
         }
  }
