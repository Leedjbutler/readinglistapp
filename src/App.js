import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';

//************************ THE ACTUAL APP ******************************//

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/library" component={Library} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
