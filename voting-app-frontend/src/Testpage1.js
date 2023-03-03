import React from 'react';


export const Testpage1 = () => (
    <div>
        <p>This is vote page.</p>
    </div>
)


/*
import React, { Component } from 'react';
import './bootstrap.css';
import './jumbotron.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Testpage1 } from './Testpage1';
import { ResultsPage } from './ResultsPage';
import { Layout } from './Layout'
import { VotePage } from './VotePage';

class App extends Component {

  render() {
    return (

      <React.Fragment>
      <Router>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a className="navbar-brand" href="/">Serverless Voting App</a>
  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/results">Results</a>
      </li>
    </ul>
  </div>
</nav>
        <Layout>
            <Switch>
              <Route exact path="/" component={ VotePage } />
              <Route path="/results" component={ ResultsPage } />
            </Switch>
        </Layout>
      </Router>
      </React.Fragment>
      
        );
  }


}

export default App;

*/