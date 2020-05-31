import React, { Component } from 'react'
// import { List,} from 'antd';

export default class ListTodo extends Component {
    render(){
    const {items} = this.props
    return(
      <div>
        {
            items.map(item=>
                <div key={item.id}>
                  <p>{item.title}</p>
                  <button onClick={()=> this.props.delete(item.id)}>-</button>
                </div> 
            )
        }

        <button type="submit">edit</button>
      </div>
    )
  }
}