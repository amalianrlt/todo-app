import React from 'react';
import "../styles/css/MainPage.css"
import TaskTodo from '../components/TaskTodo';
import { withRouter} from 'react-router-dom'
import { Container, CardTitle, CardBody, Card, Button } from 'reactstrap';

class MainPage extends React.Component{
  handleLogout = e => {
    e.preventDefault()
    localStorage.removeItem("token");
    this.props.history.push("/")
    console.log('cek')
  }

render(){
  return(
    <>
      <Container>
        <CardTitle>Welcome Amal!</CardTitle>
        <Button onClick={this.handleLogout}>Sign Out</Button>
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

export default withRouter (MainPage)
