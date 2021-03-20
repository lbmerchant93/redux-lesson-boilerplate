import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';

const ToDo = ({ id, text, completed, toggleCompleted }) => {
    return (
        <li 
            id={id}
            className={completed ? 'completed' : 'not-completed'}
            onClick={() => toggleCompleted(id)}>
                {text}
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCompleted: id => dispatch( toggleCompleted(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);