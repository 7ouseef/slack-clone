import React from 'react'
import styled from 'styled-components'


function Message({mes,user,pic,time}) {

    function convertDate(time) {
        //time should be server timestamp seconds only
        let dateInMillis = time * 1000
        let date = new Date(dateInMillis)
        let myDate = date.toLocaleDateString()
        let myTime = date.toLocaleTimeString()
        myDate = myDate.replaceAll('/', '-')
        return myDate + " " + myTime
        }

  return (
    <MessageContainer>
        <img src={pic} referrerpolicy='no-referrer' alt="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" />
        <MessageInfo>
            <h4>{user}{' '}
            <span>{convertDate(time)}</span>
            </h4>
            <p>{mes}</p>
        </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    > img{
        height: 50px;
        border-radius: 50%;
    }
`;

const MessageInfo = styled.div`
    padding: 10px;
    margin-left: 10px;
    background-color: lightblue;
    border-radius: 20px;
    > h4> span{
        color: gray;
        font-size: 12px;
        font: 300;
        margin-left: 4px;
        opacity: 0.8;
    }
`;