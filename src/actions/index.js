export const addToDo = todo => ({
    type: 'ADD_TODO',
    todo
});

export const toggleCompleted = id => ({
    type: 'TOGGLE_COMPLETED',
    id
});

export const showAll = () => ({
    type: 'SHOW_ALL'
});

export const showActive = () => ({
    type: 'SHOW_ACTIVE'
});

export const showCompleted = () => ({
    type: 'SHOW_COMPLETED'
});