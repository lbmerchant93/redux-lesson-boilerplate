const initialState = {
    todos: [],
    active: [], 
    completed: [],
    clicked: 'all'
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.todo, completed: false }]
            };
        case 'TOGGLE_COMPLETED':
            const updateToDos = state.todos.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                } 
                return todo
            })
            return {
                ...state,
                todos: updateToDos
            }
        case 'SHOW_ALL':
            return {
                ...state,
                clicked: 'all'
            }
        case 'SHOW_ACTIVE':
            const activeToDos = state.todos.filter(todo => {
                return !todo.completed
            })
            return {
                ...state,
                active: activeToDos,
                clicked: 'active'
            }
        case 'SHOW_COMPLETED':
            const completedToDos = state.todos.filter(todo => {
                return todo.completed
            })
            return {
                ...state,
                completed: completedToDos,
                clicked: 'completed'
            }
        default: 
            return state;
    }
}