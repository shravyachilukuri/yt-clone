import React from 'react';
import  "./_header.scss";
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';

const Header = (props) => {  
    return (
        <div className="header">
            <FaBars className="header_menu" size={26}
            onClick={() => props.handleSidebar()}></FaBars>

            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
            className="header_logo">       
            </img>
            <form>
                <input type="text" placeholder="search"></input>
                <button type="submit">
                <AiOutlineSearch size={22}></AiOutlineSearch> 
                </button>
            </form>
            <div className="header_icons">
             <MdNotifications size={28}></MdNotifications>   
             <MdApps size={28}></MdApps>
             <img
             src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
             alt="avatar"></img>
            </div>
        </div>
    )
}

export default Header
