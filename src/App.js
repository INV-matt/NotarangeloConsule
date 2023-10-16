import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Home from './Pages/Home.js'
import About from './Pages/About.js';
import RndDesk from './Pages/RndDesk.js';
import RndPicker from './Pages/RndPicker';
import BDay from './Pages/BDay.js';

import Header from './Components/Header';
import { _pw, firebaseConfigCalini3B, ancajnc } from './Constants.js';
import { render } from '@testing-library/react';


firebase.initializeApp(firebaseConfigCalini3B);
const firestore = firebase.firestore();

//#region BULLETIN
let loggedIn = false;

const Post = (props) => {
  const { text } = props.message;

  return (
    <div className="post">
      <p className='post_text'>{text}</p>
    </div>
  )
}

const Bulletin = () => {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const [pwValue, setPwValue] = useState('');

  const gotoBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => gotoBottom())

  const sendPost = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setFormValue('');

    gotoBottom();
    //dummy.current.scrollIntoView({behaviour: 'smooth'});
  }

  const checkPW = (e) => {
    e.preventDefault();

    if (ancajnc(pwValue) === _pw) {
      loggedIn = true;
    }

    setPwValue('');
  }

  return (
    <>
      <main>
        {messages && messages.map(_ => <Post key={_.id} message={_} />)}
        {/*<div ref={dummy}></div>*/}
      </main>

      {!loggedIn &&
        (<form className='post_form' onSubmit={checkPW}>
          <input placeholder='Password' type="password" value={pwValue} onChange={(e) => setPwValue(e.target.value)} />
          <button className='nerd-icons' type='submit'></button>
        </form>)
      }

      {loggedIn &&
        (<form className='post_form' onSubmit={sendPost}>
          <textarea rows={5} value={formValue} onChange={(e) => setFormValue(e.target.value)}></textarea>
          <button className='nerd-icons' type='submit'></button>
        </form>)
      }
    </>
  );
}
//#endregion BULLETIN


//#region RANDOM.NOT

const Random = ({ small }) => {
  /* NOMI CHE VOLEVAMO METTERE
  Billy
  PalleAscelle
  Capo
  Nana
  CurveInTesta
  Albania
  Freccia
  DequerekerequeNdrangheta
  GigaMento
  Gasperini
  Ghido11
  Napoli
  Beppe Erzallà
  Merion Djwongo
  5^ RivoluzioneIndustriale
  Drago
  FantaGnomo
  Morghi
  Notariñho
  PerchèSapo?
  FantaSideCharacter
  DeepAsTheCuts
  ThomasTheTankEngine
  Salo
  Sapo
  BonaVentura
  */

  const cl_array = ["Bilali", "Boldi", 'Capoferri', 'Casta', 'Dalgrosso', 'Danesi', 'Deou', 'Dequeker', 'Faini', 'Gaspa', 'Ghidini', 'Gurini', 'Hrzallah', 'Kemta', 'Manara', 'Marini', 'Micheletti', 'Morandi', 'Notarangelo', 'Reccagni', 'Rodella', 'Romano', 'Rubagotti', 'Salodini', 'Salvadori', 'Buona Ventura'];
  const shuffle = (a) => {

    var array = a
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;

  }

  return (
    <div className="random-container">
      <div className={small ? "s-random" : "random"}>
        <ol>
          {shuffle(cl_array).map(e => (<li>{e}</li>))}
        </ol>
      </div>
    </div>
  )
}

function App() {
  // @media queries
  const [s_screen, setS_screen] = useState(
    window.matchMedia("(max-width: 860px)").matches
  );


  useEffect(() => {
    window
      .matchMedia("(max-width: 860px)")
      .addEventListener('change', e => setS_screen(e.matches));
  }, []);

  return (
    <div>
      <Router>
        <div className="App">
          <Header s_screen={s_screen} />
          <div className="content">
            <Switch>
              <Route exact path="/" >
                <Home s_screen={s_screen} />
              </Route>
              <Route path="/about" >
                <About s_screen={s_screen} />
              </Route>
              <Route path="/desk" >
                <RndDesk s_screen={s_screen} />
              </Route>
              <Route path="/bulletin">
                <Bulletin />
              </Route>
              <Route path="/bday">
                <BDay s_screen={s_screen} />
              </Route>
              <Route path="/rnd">
                <RndPicker s_screen={s_screen} />
              </Route>
              <Route path="/list">
                <Random small={s_screen} />
              </Route>
            </Switch>
            {/*<Home s_screen={s_screen}/>*/}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;


