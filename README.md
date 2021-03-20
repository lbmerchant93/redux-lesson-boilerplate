## Mod 4 Prework - Lucas Merchant
### Redux Lesson

### Overview
This is the prework assigned during intermission before starting Module 4. The objective is to create a To Do List application using React Redux. When a user is on the app they should be able to do the following:

- Add a to do to the list
- Cross off a to do by selecting it (undoing if selected again)
- Filter showing only the active to dos
- Filter showing only the completed to dos
- Be able to show all of the list again if previously filtered

The functionality of the appliction is created using the Redux Cycle. It starts with an Action Creator which is a function that takes in information (also known as a payload) and returns and object with a type and the payload. This return is called the Action that is then put into the Dispatch function and sent to the Reducer. There is a Reducer for each part of the Store (addToDo, toggleCompleted, showAll, showActive, showCompleted, and a default for when not found). The Reducer is a function that takes in an initial value for state and the action and then returns that reducer's part of the store. Using a Redux function combineReducers, all of the Reducers get combined together into a rootReducer which is used to create the Store. The Store is created by wrapping our outermost React component in a Provider component. To connect a component to the store, we write functions (mapStateToProps and mapDispatchToProps) that return object that get merged into the component's props object. mapStateToProps allows the component to access the store and mapDispatchToProps allows the component to update the store.  

### Setup

- Clone the repo locally
- Run `npm install`
- Run `npm start` which will open the App in your browser
