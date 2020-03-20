import React from 'react';
import Todo from '../Todo/Todo';

const todos = (props) => {
    return props.todoList.map((todo, index) => {
        return <Todo key={index} text={todo}></Todo>
    })
}

export default todos;