import React from 'react';
import Todos from '../../components/Todos/Todos'
import TodoAdder from '../../components/TodoAdder/TodoAdder'

class TodoBuilder extends React.Component {
    state = {
        todoList: []
    }

    addTodo = (todo) => {
        const tmpTodoList = [...this.state.todoList];
        tmpTodoList.push(todo);
        this.setState({todoList: tmpTodoList});
    }

    render() {
        return (
            <React.Fragment>
                <Todos todoList={this.state.todoList} />
                <TodoAdder addHandler={this.addTodo} />
            </React.Fragment>
        )
    }
}

export default TodoBuilder;