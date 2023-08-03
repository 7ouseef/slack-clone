import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../features/appSlice';
import { db } from '../../firebase';

function SidebarOptions({Icon,title,addChannelOption,id}) {

    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Enter a channel name');
        if(channelName){
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomID: id,
            }))
        }
    }

  return (
    <DivContainer onClick={addChannelOption ? addChannel : selectChannel}>
    <SidebarOptionsContainer >
        {Icon && <Icon fontSize='small' style={{padding: 10}} />}
        {Icon ? (
            <h3>{title}</h3>
        ) : (
            <SidebarOptionsChannel>
                <span>#</span> {title}
            </SidebarOptionsChannel>
        )}
    </SidebarOptionsContainer>
    </DivContainer>
  )
}

export default SidebarOptions

const SidebarOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-left: 2px;
    cursor: pointer;
    > h3{
        font-weight: 400;
    }
    > h3 > span{
        padding: 10px;
    }
`;

const DivContainer = styled.div`
    :hover{
        background-color: #35012C;
        opacity: 0.8;
    }
`;

const SidebarOptionsChannel = styled.h3`
    margin: 10px;
    margin-left: 4px;
    cursor: pointer;
    font-weight: 400;
`;