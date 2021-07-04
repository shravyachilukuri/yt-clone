import React from 'react';
import  "./_sidebar.scss";
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
 } from 'react-icons/md';
 import { useDispatch } from 'react-redux';
 import { logout } from '../../redux/actions/auth.action';

const Sidebar = ({ sidebar }) => {
  const dispatch = useDispatch();
  const handleLogout = ()=>{
   dispatch(logout())
  }
    return (
        <nav className={sidebar ? "sidebar open" :"sidebar"}>
            <li>
              < MdHome size={26}></MdHome>  
              <span>Home</span>
            </li>
            <li>
              <MdSubscriptions size={26}></MdSubscriptions>  
              <span>Subscriptions</span>
            </li>
            <li>
              <MdThumbUp size={26}></MdThumbUp>  
              <span>Liked vedios</span>
            </li>
            <li>
              <MdHistory size={26}></MdHistory>  
              <span>History</span>
            </li>
            <li>
              <MdLibraryBooks size={26}></MdLibraryBooks>  
              <span>Library</span>
            </li>

         <hr></hr>   

            <li onClick={handleLogout}>
              <MdExitToApp size={26}></MdExitToApp>  
              <span>Logout</span>
            </li>

            <hr></hr>
        </nav>
    )
}

export default Sidebar
