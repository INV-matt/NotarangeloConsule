import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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

/*const fbconfigDev = {
  apiKey: "AIzaSyBpNx-IjBY4uV7YIglduQjlu_VzsPoTXsk",
  authDomain: "notaforpresident.firebaseapp.com",
  projectId: "notaforpresident",
  storageBucket: "notaforpresident.appspot.com",
  messagingSenderId: "482254203223",
  appId: "1:482254203223:web:f26365785850b10f507612"
}

const firebaseConfigProd = {
  apiKey: "AIzaSyC5eUIdLmj5PUItgNNQmtJESfYzMpZ1Kag",
  authDomain: "nota4pres-prod.firebaseapp.com",
  projectId: "nota4pres-prod",
  storageBucket: "nota4pres-prod.appspot.com",
  messagingSenderId: "888933919263",
  appId: "1:888933919263:web:0bd2ba086b619183b3032a",
  measurementId: "G-QD3GQLPN9K"
}; /*prod-config*/

const firebaseConfigNotaConsule = {
  apiKey: "AIzaSyC59Hh3cmu226pOrh6KOMuQiXCZhqa1I3M",
  authDomain: "notarangeloconsule.firebaseapp.com",
  projectId: "notarangeloconsule",
  storageBucket: "notarangeloconsule.appspot.com",
  messagingSenderId: "72855183718",
  appId: "1:72855183718:web:d08fa6858c5e9b7987a8a7"
};

firebase.initializeApp(firebaseConfigNotaConsule);
const firestore = firebase.firestore();
const _pw = "Nota4Pres";

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

  const dummy = useRef();

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const [pwValue, setPwValue] = useState('');

  const sendPost = async(e) => {
      e.preventDefault();

      await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      setFormValue('');
      dummy.current.scrollIntoView({behaviour: 'smooth'});
  }

  const checkPW = (e) => {
    e.preventDefault();

    if (pwValue === _pw) {
      loggedIn = true;
    }

    setPwValue('');
  }

  return (
      <>
          <main>
              {messages && messages.map(_ => <Post key={_.id} message={_}/>) }
          </main>
          <div ref={dummy}></div>
          
          {!loggedIn && 
            (<form className='post_form' onSubmit={checkPW}>
                <input placeholder='Password' value={pwValue} onChange={(e) => setPwValue(e.target.value)}/>
                <button className='nerd-icons' type='submit'></button>
            </form>)
          }
          
          {/*loggedIn && 
            (<form className='post_form' onSubmit={sendPost}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
                <button type='submit'>SEND</button>
            </form>)*/
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


function App() {
    // @media queries
    const [s_screen, setS_screen] = useState(
      window.matchMedia("(max-width: 860px)").matches
    );

    
  useEffect(() => {
      window
      .matchMedia("(max-width: 860px)")
      .addEventListener('change', e => setS_screen( e.matches ));
  }, []);

  return (
    <div>
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
              <Route path="/bulletin">
                <Bulletin/>
              </Route>
              <Route path="/bday">
                <BDay s_screen={s_screen}/>
              </Route>
              <Route path="/rnd">
                <RndPicker s_screen={s_screen}/>
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


