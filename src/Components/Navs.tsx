import { useContext } from "react";
import { Icon } from "./default";
import { SideBarContext } from "../Context/SideBar";
import { ProfileContext } from "../Context/Profile";
import { RouterContext } from "../Context/Router";

export const Navbar = () => {

    const { name, profilePic } = useContext(ProfileContext)
    const { title } = useContext(RouterContext)

    return (
        <div className="Navbar">
            <div className="Navbar-title"><strong>Platform Management</strong> | {title}</div>
            {/* <div className="Navbar-refDate">
                
            </div> */}
            <div className="Navbar-user">
                <img className='profile-pic' src={profilePic} alt="" />
                {name}
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

    const items = [
        {
            icon: "dashboard",
            text: "Dashboard",
            link: 'dt-dash'
        },
        {
            icon: "rocket",
            text: "Tickets",
            link: 'tickets'
        }
    ]

    const { width, toggleSideBar } = useContext(SideBarContext)

    const { navigate } = useContext(RouterContext)

    return (
        <div className="sidebar" style={{ width: `${width ? 50 : 200}px` }}>
            <div className="sidebar-nav" style={{ width: `${width ? 40 : 190}px` }}>
                <div className="sidebar-item">
                    <Icon icon="menu" />
                    <div className="sidebar-text" style={{ display: width ? "none" : "block" }}>Menu</div>
                    <button className="sidebar-button" onClick={toggleSideBar} ></button>
                </div>
                {items.map(item => {
                    return (
                        <div className="sidebar-item" key={item.icon}>
                            <Icon icon={item.icon} />
                            <div className="sidebar-text" style={{ display: width ? "none" : "block" }}>{item.text}</div>
                            <button onClick={() => navigate(item)} className="sidebar-button"></button>
                            <a href={item.link} className="sidebar-link"></a>
                        </div>
                    )
                })}
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