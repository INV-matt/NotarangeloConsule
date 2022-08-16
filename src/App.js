import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Home from './Pages/Home.js'
import About from './Pages/About.js';
import RndDesk from './Pages/RndDesk.js';
//import Bulletin from './Pages/Bulletin.js';

import Header from './Components/Header';



firebase.initializeApp({
  apiKey: "AIzaSyBpNx-IjBY4uV7YIglduQjlu_VzsPoTXsk",
  authDomain: "notaforpresident.firebaseapp.com",
  projectId: "notaforpresident",
  storageBucket: "notaforpresident.appspot.com",
  messagingSenderId: "482254203223",
  appId: "1:482254203223:web:f26365785850b10f507612"
})


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();




const _pw = 'Nota4Pres';


let loggedIn = false;

const Post = (props) => {
  const { text } = props.message;

  return (
    <div className="post debug">
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
    <div style={{ margin: "0 1em", paddingTop: "env(safe-area-inset-top)"}}>
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
            </Switch>
            {/*<Home s_screen={s_screen}/>*/}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;


