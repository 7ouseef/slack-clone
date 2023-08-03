import React from 'react'
import styled from 'styled-components'
import WarningIcon from '@material-ui/icons/Warning';

function SelectRoomID() {
  return (
    <SelectRoomIDContainer>
        <WarningIcon />
        <h3>Select a room id</h3>
    </SelectRoomIDContainer>
  )
}

export default SelectRoomID

const SelectRoomIDContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    margin-top: 69px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    > .MuiSvgIcon-root{
        font-size: 150px !important;
        color: gray !important;
    }
    > h3{
        font-size: 20px;
        color: gray;
    }

`;