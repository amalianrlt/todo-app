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
    editName: false,
    description: "",
    deadline: "20/10/2020 00:02",
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

  changeDeadline = (e) => {
    this.setState({
      deadline: e.target.value,
    });
  };

  async componentDidMount() {
    this.props.userTodo();
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
      id:this.state.id, 
      name: this.state.name,
      description: this.state.description,
      deadline: "01/01/2021 10:30",
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
        name: "",
        description: "",
        deadline: ""
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

  handleEdit = async (id) => {
    token = localStorage.getItem("token");
    const deleteTodo = this.state.data.filter((item) => item.id !== id);
    const selectedItem = this.state.data.find((item) => item.id === id);
    console.log(this.state.data);
    try {
      const res = await axios.put(
        `${baseUrl}/tasks/${id}`,
        {
          name: selectedItem.name,
          description: selectedItem.description,
          id: id
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
        id: selectedItem.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // handleImportant = async(id) => {
  //   // console.log(selectedTodo);
  //   console.log("tes");
  //   // const selectedTodo = this.state.data.find((item) => item.id === id);
  //   await this.setState({
    
  //     data : this.state.data.map((item) => {
      
  //       if(
  //         item.id===id){
  //           return{
  //             ...item,
  //             important: !item.important
  //           };
  //         } else{
  //           return (
  //             item
  //           )
  //         }
  //     })
  //   })
  //   console.log(this.state.data)
  // };

  handleImportant = async (id) => {
    // console.log(selectedTodo);
    console.log("tes");

    try {
      const res = await axios.patch(
        `${baseUrl}/tasks/${id}/important`, {
          id:this.state.id,
          name:this.state.name,
          description: this.state.description,
          deadline: this.state.deadline,
          finished: false,
          important: false,
        }, {
          headers: {
            Authorization: token,
          },
        }
      )
      this.setState({
        data: this.state.data.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              important: !item.important,
            };
          } else {
            return item;
          }
        }),
      });
    } catch (error) {
      console.log(error)
    }
    // const selectedTodo = this.state.data.find((item) => item.id === id)
    console.log(this.state.data);
  };

  handleCheckList = async(id) => {
    console.log("check", id);
    try {
      const res = await axios.patch(
        `${baseUrl}/tasks/${id}/finish`,{
          id:this.state.id,
          name:this.state.name,
          description: this.state.description,
          deadline: this.state.deadline,
          finished: false,
          important: false,
        }, {
          headers: {
            Authorization: token,
          },
        }
      )
      console.log('cekk:', res.data)
      this.setState({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
    } catch (error) {
      console.log(error)
    }
    

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
          changeDeadline={this.changeDeadline}
          deadline={this.deadline}
          submit={this.submit}
          name={this.state.name}
          description={this.state.description}
          handleEdit={this.handleEdit}
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
