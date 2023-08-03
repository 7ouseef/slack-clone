import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { auth, db } from '../../firebase';
import firebase from 'firebase/compat/app'
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatsInput({channelID,channelName}) {

    const [user] = useAuthState(auth);

    const [input,setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelID){
            return false;
        }

        db.collection('rooms').doc(channelID).collection('messages').add({
            message: input,
            username: user.displayName,
            photoURL:  user.photoURL ? user.photoURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('');
    }

  return (
    <ChatsInputContainer>
        <form action="">
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={channelName ? `Message ${channelName}` : 'Message'} />
            <Button hidden type='submit' onClick={sendMessage}>Send</Button>
        </form>
    </ChatsInputContainer>
  )
}

export default ChatsInput

const ChatsInputContainer = styled.div`
    border-radius: 20px;
    > form{
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button{
        display: none;
    }
`;