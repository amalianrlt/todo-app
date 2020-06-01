import React, { Component } from 'react'
import { FormGroup, Button, Input, Label} from 'reactstrap'

export default class AddTodo extends Component {
    render() {
        const {item, change, submit} = this.props
        return (
            <div>
                <FormGroup onSubmit ={submit}> 
                    <Label for="Todo">Todo</Label>
                    <Input className="form-control" 
                    type="text"
                    placeholder = "Enter your Todo" 
                    value= {item} 
                    onChange={change}/>
                <Button color="secondary" size="sm"  onClick={(e)=> submit(e)}>+</Button>
                </FormGroup>          
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
            
