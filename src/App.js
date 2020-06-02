import React from 'react';


import TodoForm from '../src/components/TodoForm';
import TodoList from '../src/components/TodoList';

const myToDoList = [
  {
    task: 'Learn setState()',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Style my Todo List',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Learn React!',
    id: 1528817077288,
    completed: false
  },
  {
    task: 'Virtual DOM re-write',
    id: 1528817077289,
    completed: false
  },
  {
    task: 'Build Todo App',
    id: 1528817077290,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      myToDoList: myToDoList
    }
  }

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      myToDoList: [...myToDoList, newTodo]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      myToDoList: this.state.myToDoList.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
          } 
          else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <div>
          <TodoList
            toggleTodo={this.toggleTodo}
            myToDoList={this.state.myToDoList}
          />
        </div>
      </div>
    );
  }
}

export default App;
