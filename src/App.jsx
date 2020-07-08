import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import './reset.css';
import Header from './components/header';
import Footer from './components/Footer';
import { publicRoutes } from './routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
