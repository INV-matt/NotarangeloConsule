import React, { useState, useEffect } from 'react';
import Home from './Home.js'
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
    <div className="App">
      <Header s_screen={s_screen}/>
      <div className="content">
        <Home s_screen={s_screen}/>
      </div>

    </div>
  );
}

export default App;


