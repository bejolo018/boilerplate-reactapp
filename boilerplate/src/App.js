import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
      </Switch>
      <Footer />
      </Router>

    </div>
  );
}

export default App;
