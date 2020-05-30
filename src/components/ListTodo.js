import React from 'react'
// import { List,} from 'antd';

export default class ListTodo extends React.Component {
    render(){
    const {items} =this.props
    return(
      <div>
        {
        items.map(item=>{
            return(
                <div key={item.id}>
                  {item.title}
                  <button onClick={()=> this.props.delete(item.id)}>delete</button>
                </div> 

            )
            })
        }

        <button type="submit">edit</button>
      </div>
    )
  }
}