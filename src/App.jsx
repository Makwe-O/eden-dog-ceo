import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Doggo</h1>
      </div>
      <Switch>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              path={route.url}
              component={route.component}
              key={index}
              exact
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
