import React from 'react';
import './App.css';
import styled from 'styled-components'
import {useAuthState} from 'react-firebase-hooks/auth'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chats from './components/Chats/Chats';
import { auth } from './firebase';
import Login from './components/Login/Login';
import Spinner from 'react-spinkit';
import { useSelector } from 'react-redux';
import { selectRoomID } from './features/appSlice';
import SelectRoomID from './components/Chats/SelectRoomID';

function App() {

  const [user,loading] = useAuthState(auth);
  const roomID = useSelector(selectRoomID);

  if(loading){
    return(
      <AppLoading>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="" />
         <Spinner name='ball-spin-fade-loader' fadeIn='none' color='purple' />
      </AppLoading>
    )
  }

  return (
    <div className='app'>
      <BrowserRouter>

      {!user ? (
        <Login />
      ) : (
        <>
        <Header />

        <AppBody>

          <Sidebar />
          {roomID ? 
            (<Routes>
              <Route path='/' exact element={<Chats />} />
            </Routes>) :
            (<Routes>
              <Route path='/' exact element={<SelectRoomID />} />
            </Routes>)
          }
        </AppBody>
        </>
      )}

      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  height: 100vh;
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