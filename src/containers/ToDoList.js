import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';
import { showAll, showActive, showCompleted } from '../actions';

const ToDoList = ({ todos, active, completed, clicked, showAll, showActive, showCompleted }) => {

    const displayTodos = () => {
        if (clicked === 'all') {
            return todos.map(todo => {
                return (
                   <Todo 
                        {...todo}
                        key={todo.id}
                    /> 
                )
            })
        } else if (clicked === 'active') {
            return active.map(todo => {
                return (
                    <Todo 
                         {...todo}
                         key={todo.id}
                     /> 
                 )
            })
        } else if (clicked === 'completed') {
            return completed.map(todo => {
                return (
                    <Todo 
                         {...todo}
                         key={todo.id}
                     /> 
                 )
            })
        }
    }
    
    return (
        <section>
            <ul>
                {displayTodos()}
            </ul>
            <button onClick={() => showAll()}>All</button>
            <button onClick={() => showActive()}>Active</button>
            <button onClick={() => showCompleted()}>Completed</button>
        </section>
    )
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    active: state.todos.active,
    completed: state.todos.completed,
    clicked: state.todos.clicked
});

const mapDispatchToProps = dispatch => ({
    showAll: () => dispatch( showAll() ),
    showActive: () => dispatch( showActive() ),
    showCompleted: () => dispatch( showCompleted() )
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);