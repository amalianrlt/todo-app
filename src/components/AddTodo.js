import React, { Component } from 'react'
import { Form, FormGroup, CardTitle, Button, Input, Label} from 'reactstrap'

export default class AddTodo extends Component {
    render() {
        const {name, change, submit} = this.props
        return (
            <div>
                <CardTitle style={{fontSize:30}}>Todo</CardTitle>
                <Form onSubmit={(e)=> submit(e)}>

                    <FormGroup className="d-flex justify-content-center" onSubmit ={submit}> 
                        <Input className="form-control w-50 mr-20 " 
                        type="text"
                        placeholder = "Enter your Todo" 
                        value= {name} 
                        onChange={change}/>
                    <Button color="primary" size="sm">+ Add</Button>
                    </FormGroup>          
                </Form>
                {/* <form>
                    <input 
                    name ="description"
                    placeholder = "Describe it!" 
                    value= {this.state.description} 
                    onChange={e => this.change(e)}/>
                </form>           */}
                {/* <form>
                    <input 
                    name ="deadline"
                    placeholder = "Input your dedline" 
                    value= {this.state.deadline} 
                    onChange={e => this.change(e)}/>
                </form>           */}
                
            </div>
        )
    }
}
            
