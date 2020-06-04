/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import axios from "axios";

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1";
let token;

export default class TaskTodo extends Component {
  state = {
    data: [],
    id: "",
    name: "",
    description: "",
    deadline: "20/10/2020 00:00",
    finished: false,
    important: false,
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  async componentDidMount() {
    this.props.userTodo()
    token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${baseUrl}/tasks`, {
        headers: {
          Authorization: token,
        },
      });
      console.log("ini nyoba:", res.data);
      this.setState({ data: res.data.data });
    } catch (error) {
      console.log(error);
    }
  }

  submit = async (e) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    const newTodo = {
      // id: this.state.data.length + 1,
      name: this.state.name,
      description: this.state.description,
      deadline: this.state.deadline,
    };
    let updatedTodo = [...this.state.data, newTodo];
    console.log(updatedTodo);
    try {
      const res = await axios.post(`${baseUrl}/tasks`, newTodo, {
        headers: {
          Authorization: token,
        },
      });
      this.setState({
        data: updatedTodo,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = async (id) => {
    token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`${baseUrl}/tasks/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      this.setState({
        data: this.state.data.filter((item) => item.id !== id),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // handleEdit = (id) =>{
  //     const deleteTodo = this.state.data.filter(item => item.id !== id);
  //     const selectedItem = this.state.data.find(item => item.id===id)
  //     console.log(selectedItem)
  //     this.setState ({
  //         data: deleteTodo,
  //         name: selectedItem.name,
  //         editName: true,
  //         id: id
  //     })

  // }

  handleEdit = async (id) => {
    token = localStorage.getItem("token");
    const deleteTodo = this.state.data.filter((item) => item.id !== id);
    const selectedItem = this.state.data.find((item) => item.id === id);
    console.log(selectedItem.name);
    try {
      const res = await axios.put(
        `${baseUrl}/tasks/${id}`
        ,
        {
          name: selectedItem.name,
          description: selectedItem.description,
          id:selectedItem.id
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log("tes", selectedItem.name)
      this.setState({
        data: deleteTodo,
        name: selectedItem.name,
        description: selectedItem.description,
        editName: true,
        id:selectedItem.id
      });
    } catch (error) {
      console.log(error);
    }
  };


  handleImportant = async(id) => {
    // console.log(selectedTodo);
    console.log("tes");
    // const selectedTodo = this.state.data.find((item) => item.id === id);
    await this.setState({
    
      data : this.state.data.map((item) => {
      
        if(
          item.id===id){
            return{
              ...item,
              important: !item.important
            };
          } else{
            return (
              item
            )
          }
      })
    })
    console.log(this.state.data)
  };

  handleCheckList = (id) => {
    console.log("check", id);

    this.setState({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            finished: true
          };
        } else {
          return item;
        }
      }),
    });

    // const checkList = this.state.data.filter(item=> item.id === id)
    // console.log(checkList)
  };

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/");
    console.log("cek");
  };

  render() {
    return (
      <div>
        <div>{this.getAllTask}</div>
        <AddTodo
          changeName={this.changeName}
          changeDescription={this.changeDescription}
          submit={this.submit}
          name={this.state.name}
          description={this.state.description}
        />
        <ListTodo
          data={this.state.data}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleImportant={this.handleImportant}
          handleCheckList={this.handleCheckList}
          getAllTask={this.getAllTask}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}
