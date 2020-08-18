import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1 className="font-bold text-2x1"> This is the HomePage</h1>
        </Route>
        <Route exact path="/about">
          <h1 className="font-bold text-2x1"> About Us</h1>
        </Route>
      </Switch>
      <Footer />
      </Router>

    </div>
  );
}

export default App;
