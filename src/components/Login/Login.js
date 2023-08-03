import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { auth, googleProvider } from '../../firebase';

function Login() {

    const signin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(googleProvider).catch(e => alert(e));
    }

  return (
    <LoginContainer>
        <LoginInner>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="" />
            <Button onClick={signin}>SIGN IN with google</Button>
        </LoginInner>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const LoginInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 50px;
    box-shadow: 0 1px 3px rgba(0,0,0.12);
    border-radius: 10px;
    > button{
        color: white !important;
        margin-top: 10px;
        background-color: #2ab77e !important;
        width: 100%;
        border-radius: 8px !important;
    }
`;