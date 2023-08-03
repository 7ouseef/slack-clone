import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useCollection} from 'react-firebase-hooks/firestore'
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {

    const [channels] = useCollection(db.collection("rooms"));

  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarHeaderInfo>
                <h2>SLACK CLONE</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </SidebarHeaderInfo>
            <CreateIcon />
        </SidebarHeader>

        <SidebarOptions Icon={InsertCommentIcon} title='Thread' />
        <SidebarOptions Icon={InboxIcon} title='Mentions and reactions' />
        <SidebarOptions Icon={DraftsIcon} title='Saved items' />
        <SidebarOptions Icon={BookmarkBorderIcon} title='Channel browser' />
        <SidebarOptions Icon={PeopleAltIcon} title='People & user groups' />
        <SidebarOptions Icon={AppsIcon} title='Apps' />
        <SidebarOptions Icon={FileCopyIcon} title='File borwser' />
        <SidebarOptions Icon={ExpandLessIcon} title='Show less' />
        <hr />
        <SidebarOptions Icon={ExpandMoreIcon} title='Channels' />
        <hr />
        <SidebarOptions addChannelOption Icon={AddIcon} title='Add' />

        {channels?.docs.map( doc => (
            <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
         ) )
        }

    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
    flex: 0.3;
    color: white;
    background-color: var(--slack-color);
    max-width: 260px;
    margin-top: 69px;
    overflow-x: hidden;
    overflow-y: scroll;
    > hr{
        border: 1px solid #35012C;
        /* margin: 10px 0 10px 0; */
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #35012C;
    padding: 13px;
    align-items: center;
    > .MuiSvgIcon-root{
        padding: 8px;
        color: #35012C;
        background-color: white;
        border-radius: 50%;
        font-size: 18px;
    }
`;

const SidebarHeaderInfo = styled.div`
    flex: 1;
    > h2{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
        letter-spacing: 1.5px;
    }
    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        color: green;
        margin-right: 2px;
        margin-top: 1px;
    }
`;