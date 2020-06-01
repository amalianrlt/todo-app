import React, { Component } from 'react'
// import { List,} from 'antd';
import TodoItem from './TodoItem'

export default class ListTodo extends Component {
    render(){
      const {items, handleDelete, handleEdit} = this.props
    return(
      <div>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
       </div>
    )}}

            // {/* <div>
            //     { editMode? 
            //     <div>
            //       <input type="text" defaultValue={item.title}/>
            //     </div> :
            //     <div onDoubleClick ={editMode}>{item.title}
            //     </div>}
            // </div>
            // <Button color="primary" onClick={()=> this.props.delete(item.id)}>delete</Button> */}