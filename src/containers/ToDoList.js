import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';

const ToDoList = ({todos}) => {
    console.log(todos)

    const displayTodos = todos.map(todo => {
        return (
            <Todo 
                {...todo}
                key={todo.id}
            />
        )
    })
    return (
        <section>
            <ul>
                {displayTodos}
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </section>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);