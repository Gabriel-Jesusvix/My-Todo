import React from 'react'
import NavBar from "./componets/navBar";
import TodoList from "./componets/todolist";
import TodoContext from "./contexts/TodoContext";
import AddTodo from '../src/componets/AddTodo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <TodoContext>
    <Router>
        <NavBar />
        <br />
        <div className="uk-container">
            <Switch>
                <Route path="/create">
                    <AddTodo></AddTodo>
                </Route>
                <Route path="/">
                    <h4>Minha lista de tarefas</h4>
                    <TodoList></TodoList>
                </Route>
            </Switch>
        </div>
    </Router>
</TodoContext>
  );
};

export default App;
