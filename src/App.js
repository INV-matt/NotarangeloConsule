import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home.js'
import About from './Pages/About.js';
import RndDesk from './Pages/RndDesk.js';

import Header from './Components/Header';

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
            <Route path="/desk" >
              <RndDesk s_screen={s_screen}/>
            </Route>
          </Switch>
          {/*<Home s_screen={s_screen}/>*/}
        </div>
      </div>
    </Router>
  );
}

export default App;


