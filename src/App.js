import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ListTasks from "./components/pages/ListTasks";
import CreateTask from "./components/pages/CreateTask";
import DeleteBulk from "./components/pages/DeleteBulk";
import {
  Container,
  CustomLink,
} from "./components/shared/styledComponents.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <CustomLink to="/list-tasks">List Tasks</CustomLink>
          <CustomLink to="/create-task">Create Task</CustomLink>
          <CustomLink to="/bulk-delete">Bulk Delete</CustomLink>
        </Container>

        <Switch>
          <Route exact path="/">
            <Redirect to="/list-tasks" />
          </Route>

          <Route path="/list-tasks" component={ListTasks} />

          <Route path="/create-task" component={CreateTask} />

          <Route path="/bulk-delete" component={DeleteBulk} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
