import React from 'react';
import {Link} from 'react-router-dom'
import "../styles/css/MainPage.css"
import TaskTodo from '../components/TaskTodo';

export default class MainPage extends React.Component{
render(){
  return(
    <div>
      <div className="header-container">
        <Link to ="/"> Todo </Link>  ||  
        <Link to ="/">Sign Out</Link>
      </div>
      <div className="contents">
        <div className ="side-content">
          <ul className="list">
            <li>Amal</li>
            <li>My Day</li>
            <li>Important</li>
            <li>Completed</li>
          </ul>
        </div>
        <div className ="main-content">
            <div className ="todo">
                <TaskTodo/>
            </div>
            <div className ="task">
              <p>your task here</p>
              {/* <div className ="edit-task">
                  {this.props.todos.map( item => {
                  return(
                    <div key={item.id}>
                      <h1>{item.name}</h1>
                      <button onClick={()=> this.props.delTodo(item.id)}>delete</button>
                    </div>
                  )
                })}
              </div> */}
            </div>
        </div>
    </div>
    </div>
  )
  }
}  


