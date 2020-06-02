import React from "react";

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            todo: ""
        }
    }


handleChanges = e => {
    this.setState({
        todo: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo:""
        });
        
    };

clearCompleted = () => {
    this.setState({
        myToDoList: this.state.myToDoList.filter(todo =>
            !todo.completed
            )
    })
}

    
    render(){
        return(
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='todo'
                        value={this.state.todo}
                        onChange={this.handleChanges}
                    />
                        <button>Add</button>
                        <button onClick={this.props.clearCompleted}>
                Clear
            </button>
                    
                </form>
            );
        }
}
export default TodoForm;