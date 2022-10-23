import { useContext } from "react";
import { Icon } from "./default";
import { SideBarContext } from "../Context/SideBar";
import { DataContext } from "../Context/Data";
import { ProfileContext } from "../Context/Profile";

export const Navbar = () => {

    const { displayedDate, refreshDate } = useContext(DataContext)
    const { name, profilePic } = useContext(ProfileContext)

    return (
        <div className="Navbar">
            <div className="Navbar-title"><strong>Tickets</strong> | Dashboard</div>
            <div className="Navbar-refDate">
                <button onClick={refreshDate}>
                    <Icon icon="refresh" />
                </button>
                Last Refreshed: {displayedDate}
            </div>
            <div className="Navbar-user">
                <img className='profile-pic' src={profilePic} alt="" />
                { name }
            </div>
        </div>
    )
}

/* type SideBarMenu = {
    icon: string,
    text?: string,
    link?: string
}[] */

export const SideBar = () => {

    /* const items: SideBarMenu = [
        {
            icon: "dashboard",
            text: "Dashboard",
            link: 'Something'
        },
        {
            icon: "refresh",
            text: "Refresh Data",
            link: 'Something'
        },
        {
            icon: "home",
            text: "Dashboard",
            link: 'Something'
        }
    ] */

    const { width, toggleSideBar } = useContext(SideBarContext)


    return (
        <div className="sidebar" style={{ width: `${width ? 50 : 200}px` }}>
            <div className="sidebar-nav" style={{ width: `${width ? 40 : 190}px` }}>
                <div className="sidebar-item">
                    <Icon icon="menu" />
                    <div className="sidebar-text" style={{ display: width ? "none" : "block" }}>Menu</div>
                    <button className="sidebar-button" onClick={toggleSideBar} ></button>
                </div>
                <div className="sidebar-item">
                    <Icon icon="dashboard" />
                    <div className="sidebar-text" style={{ display: width ? "none" : "block" }}>Dashboard</div>
                    <a href="/" className="sidebar-link"></a>
                </div>
                {/* {items.map(item => {
                    return (
                        <div className="sidebar-item" key={item.icon}>
                            <Icon icon={item.icon} />
                            <div className="sidebar-text" style={{ display: width ? "none" : "block" }}>{item.text}</div>
                            <a href="/" className="sidebar-link"></a>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}