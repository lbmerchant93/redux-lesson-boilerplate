export const addToDo = todo => ({
    type: 'ADD_TODO',
    todo
});

export const toggleCompleted = id => ({
    type: 'TOGGLE_COMPLETED',
    id
});