import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import ChatsInput from './ChatsInput';
import { useSelector } from 'react-redux';
import { selectRoomID } from '../../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Message from './Message';
import Spinner from 'react-spinkit';

function Chats() {

  const roomID = useSelector(selectRoomID);
  
  const [roomDetails] = useDocument(
    roomID && db.collection('rooms').doc(roomID)
  );

  const [roomMessages,loading] = useCollection(
    roomID && db.collection('rooms').doc(roomID).collection('messages').orderBy('timestamp','asc')
  );

  const chatRef = useRef(null);

  useEffect( () => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });
  } , [roomMessages,roomID,loading] );

  if(loading){
    return(
      <ChatsLoading>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="" />
         <Spinner name='ball-spin-fade-loader' fadeIn='none' color='purple' />
      </ChatsLoading>
    )
  }

  return (
    <ChatsContainer>
      {roomDetails && roomMessages &&
      <>
      <ChatsHeader>
        <HeaderLeft>
          <h4><strong>#{roomID ? roomDetails?.data().name : ('No_room_is_selected')}</strong></h4>
          <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight>
          <InfoOutlined />
          <p> Details</p>
        </HeaderRight>
      </ChatsHeader>
      <ChatsMessages>

        {roomMessages?.docs.map( doc => {
          const {message,username,photoURL,timestamp} = doc.data();
          return (
            <Message mes={message} user={username} pic={photoURL} time={timestamp?.seconds} />
          )
        } )}
        
        <ChatsBottom ref={chatRef} />
      </ChatsMessages>
      <ChatsInput channelID={roomID} channelName={roomDetails?.data().name} />
      </>
      }
    </ChatsContainer>
  )
}

export default Chats

const ChatsContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const ChatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  margin-top: 69px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4{
    font-size: 16px;
    text-transform: lowercase;
    margin-right: 5px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  > p{
    font-size: 14px;
  }
  > .MuiSvgIcon-root{
    margin-right: 5px;
  }
`;

const ChatsMessages = styled.div``;

const ChatsBottom = styled.div`
  padding-bottom: 100px;
`;

const ChatsLoading = styled.div`
  flex: 0.7;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img{
    padding: 20px;
    height: 100px;
    margin-bottom: 50px;
  }
`;