import React, { Component } from 'react'
import { Form, FormGroup, CardTitle, Button, Input} from 'reactstrap'

export default class AddTodo extends Component {
    render() {
        const {name, changeName, changeDescription, submit, description} = this.props
        return (
            <div>
                <CardTitle style={{fontSize:30}}>Todo</CardTitle>
                <Form onSubmit={(e)=> submit(e)}>
                    <FormGroup className="d-flex justify-content-center" onSubmit ={submit}> 
                        <Input className="form-control w-50 mr-20 " 
                        type="text"
                        placeholder = "Enter your Todo" 
                        value= {name} 
                        onChange={changeName}/>
                        <Input className="form-control w-50 mr-20 " 
                        type="text" 
                        placeholder = "describe it" 
                        value= {description} 
                        onChange={changeDescription}/>
                    <Button color="primary" size="sm">+ Add</Button>
                    </FormGroup>          
                </Form>
                {/* <form>
                    <input 
                    name ="description"
                    placeholder = "Describe it!" 
                    value= {this.state.description} 
                    onChange={e => this.changeName(e)}/>
                </form>           */}
                {/* <form>
                    <input 
                    name ="deadline"
                    placeholder = "Input your dedline" 
                    value= {this.state.deadline} 
                    onChange={e => this.changeName(e)}/>
                </form>           */}
                
            </div>
        )
    }
}
            
