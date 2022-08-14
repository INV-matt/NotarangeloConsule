/*import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';

const auth = firebase.auth();
const firestore = firebase.firestore();


const Post = (props) => {
    const { text } = props.message;

    return (
        <p>{text}</p>
    )
}
 

const Bulletin = () => {

    const dummy = useRef();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendPost = async(e) => {
        e.preventDefault();

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        setFormValue('');
        dummy.current.scrollIntoView({behaviour: 'smooth'});
    }

    return (
        <>
            <main>
                {messages && messages.map(_ => <Post key={_.id} message={_}/>) }
            </main>
            <div ref={dummy}></div>
            

            <form onSubmit={sendPost}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
                <button type='submit'>SEND</button>
            </form>
        </>
    );
}
 
export default Bulletin;*/