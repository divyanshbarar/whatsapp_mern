import React from 'react'
import "./Sidebar.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';

import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar className="sidebar__avatar" src="https://pbs.twimg.com/profile_images/720270636434763777/dB0QdPId.jpg" />
                <div className="sidebar__headerRight">

                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>




                </div>
            </div>

            <div className="sidebar__search">

                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input
                        placeholder="search or start a new chat"
                        type="text" />
                </div>
            </div>
            <div className="sidebar__chats">

                <SidebarChat />
            </div>

        </div>
    )
}

export default Sidebar
