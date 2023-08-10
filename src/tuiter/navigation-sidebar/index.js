import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {faHome,faFileExport,faBell,faMessage, faBookmark,faList,faUser,faInfo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state) => state.user);
    const [ignore, tuiter, active] = pathname.split("/");
    return (
        <div className="list-group">
            {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
            {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
            { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}

            <Link to={"/tuiter/home "} className={`list-group-item
                ${active === "home" ? "active" : ""}`}><FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;&nbsp;Home</Link>
            <Link to={"/tuiter/explore "} className={`list-group-item
                ${active === "explore" ? "active" : ""}`}><FontAwesomeIcon icon={faFileExport} />&nbsp;&nbsp;&nbsp;Explore</Link>
            <Link to={"/tuiter/notifications "} className={`list-group-item
                ${active === "notifications" ? "active" : ""}`}><FontAwesomeIcon icon={faBell} />&nbsp;&nbsp;&nbsp;&nbsp;Notifications
            </Link>
            <Link to={"/tuiter/messages "} className={`list-group-item
                ${active === "messages" ? "active" : ""}`}><FontAwesomeIcon icon={faMessage} />&nbsp;&nbsp;&nbsp;&nbsp;Messages</Link>
            <Link to={"/tuiter/bookmarks "} className={`list-group-item
                ${active === "bookmarks" ? "active" : ""}`}><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bookmarks</Link>
            <Link to={"/tuiter/lists "} className={`list-group-item
                ${active === "lists" ? "active" : ""}`}><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;&nbsp;&nbsp;Lists</Link>
            <Link to={"/tuiter/profile "} className={`list-group-item
                ${active === "profile" ? "active" : ""}`}><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;&nbsp;Profile</Link>
            <Link to={"/tuiter/more "} className={`list-group-item
                ${active === "more" ? "active" : ""}`}><FontAwesomeIcon icon={faInfo} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More</Link>
        </div>
    );
};
export default NavigationSidebar;