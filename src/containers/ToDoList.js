import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';
import { showAll, showActive, showCompleted } from '../actions';

const ToDoList = ({ todos, showAll, showActive, showCompleted }) => {

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
            <button onClick={() => showAll()}>All</button>
            <button onClick={() => showActive()}>Active</button>
            <button onClick={() => showCompleted()}>Completed</button>
        </section>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    showAll: () => dispatch( showAll() ),
    showActive: () => dispatch( showActive() ),
    showCompleted: () => dispatch( showCompleted() )
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);