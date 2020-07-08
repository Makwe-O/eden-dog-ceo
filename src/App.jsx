import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import './reset.css';
import Header from './components/header';
import Footer from './components/Footer';
import ScrollToTop from 'react-scroll-up';
import NotFound from './pages/NotFound';
import Top from './assests/top.svg';
import { publicRoutes } from './routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <ScrollToTop showUnder={500}>
        <span>
          <img src={Top} alt="scroll to top" height="30px" />
        </span>
      </ScrollToTop>
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
