import React from 'react';
import "../styles/css/MainPage.css"
import TaskTodo from '../components/TaskTodo';
import { Container, CardTitle, CardBody, Card } from 'reactstrap';

export default class MainPage extends React.Component{
render(){
  return(
    <>
      <Container>
        <CardTitle>Welcome Amal!</CardTitle>
        <CardBody className="card-group container-fluid mr-2">
          <div className="side-left-todo">
            <ul className="list">
              <li>Amal</li>
              <li>My Day</li>
              <li>Important</li>  
              <li>Completed</li>
            </ul>
          </div>
          <Card className="side-right-todo">
            <TaskTodo/>
          </Card>
        </CardBody>
      </Container>
    </>
  )
  }
}  


