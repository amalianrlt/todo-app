import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class ListTodo extends Component {
  render() {
    const {
      data,
      handleDelete,
      handleEdit,
      handleImportant,
      handleCheckList,
      handleLogout,
    } = this.props;

    // render 1 data = undefined
    // render 2 data = []
    // console.log(data);
    return (
      <div>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <TodoItem
                key={item.id}
                name={item.name}
                description={item.description}
                important={item.important}
                finished={item.finished}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleImportant={() => handleImportant(item.id)}
                handleCheckList={() => handleCheckList(item.id)}
                handleLogout={handleLogout}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

// {/* <div>
//     { editMode?
//     <div>
//       <input type="text" defaultValue={item.title}/>
//     </div> :
//     <div onDoubleClick ={editMode}>{item.title}
//     </div>}
// </div>
// <Button color="primary" onClick={()=> this.props.delete(item.id)}>delete</Button> */}
