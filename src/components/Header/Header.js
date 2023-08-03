import React from 'react'
import styled from 'styled-components'
import {Avatar,IconButton } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function Header() {

  const [user] = useAuthState(auth);

  console.log(user.photoURL);

  return (
    <HeaderContainer>

      <HeaderLeft>
        <HeaderAvatar  referrerpolicy='no-referrer' onClick={() => auth.signOut()} src={user?.photoURL} alt={user?.displayName} />
        <IconButton>
          <AccessTimeIcon />
        </IconButton>
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search' />
      </HeaderSearch>

      <HeaderRight>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
      </HeaderRight>

    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  color: white;
  background-color: var(--slack-color);
  border-bottom: 1px solid #35012C;
  z-index: 999;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiIconButton-root{
    margin-left: auto;
    margin-right: 30px;
    color: white !important;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  background-color: #681969;
  padding: 8px 12px;
  border-radius: 15px;
  min-width: 30vw;
  text-align: center;
  > input{
    background: transparent;
    outline: none;
    border: none;
    color: white;
    font-size: 14px;
    margin-left: 5px;
    width: 100%;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 8px;
  > .MuiIconButton-root{
    color: white !important;
  }
`;