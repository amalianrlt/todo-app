import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        const {item, change, submit} = this.props
        return (
            <div>
                <form onSubmit={submit}> 
                    <input 
                    type="text"
                    placeholder = "Enter your Todo" 
                    value= {item} 
                    onChange={change}/>
                </form>          
                <button type="submit">+</button>
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
    // state = {
    //     id : '',
    //     name : '',
    //     description :'',
    //     deadline :''
    //   };
    
    //   change = e => {
    //     this.setState({
    //       [e.target.name] : e.target.value
    //     })
    //   }
    
    //   onSubmit = e => {
    //     e.preventDefault()
    //     const addNewTodo ={ 
    //       id: this.state.id,
    //       name :this.state.name,
    //       description: this.state.description,
    //       deadline : this.state.deadline
    //     }
    //     this.props.addNewTodo(addNewTodo)
    //     this.setState({
    //         id : '',
    //         name : '',
    //         description :'',
    //         deadline :''
    //     })
    //   }
            
