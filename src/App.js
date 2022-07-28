import React, { useState, useEffect } from 'react';
import Home from './Home.js'
import About from './About.js';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    // @media queries
    const [s_screen, setS_screen] = useState(
      window.matchMedia("(max-width: 768px)").matches
    );

    
  useEffect(() => {
      window
      .matchMedia("(max-width: 768px)")
      .addEventListener('change', e => setS_screen( e.matches ));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header s_screen={s_screen}/>
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home s_screen={s_screen}/>
            </Route>
            <Route path="/about" >
              <About s_screen={s_screen}/>
            </Route>
          </Switch>
          {/*<Home s_screen={s_screen}/>*/}
        </div>
      </div>
    </Router>
  );
}

export default App;


