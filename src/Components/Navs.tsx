import { useContext } from "react";
import { Icon } from "./default";
import { SideBarContext } from "../Context/SideBar";
import { ProfileContext } from "../Context/Profile";
import { RouterContext } from "../Context/Router";
import { ThemeContext } from "../Context/Theme";

export const Navbar = () => {

    const { name, profilePic } = useContext(ProfileContext)
    const { title } = useContext(RouterContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={`Navbar Navbar${theme}`}>
            <div className="Navbar-title"><strong>Platform Management</strong> | {title}</div>
            {/* <button onClick={toggleTheme}>Click Me!</button> */}
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
            text: "Real-Time Dashboard",
            link: 'tickets'
        }
    ]

    const { width, toggleSideBar } = useContext(SideBarContext)

    const { navigate } = useContext(RouterContext)

    return (
        <div className="sidebar" style={{ width: `${width}px` }}>
            <div className="sidebar-nav" style={{ width: `${width-10}px` }}>
                <div className="sidebar-item">
                    <Icon icon="menu" />
                    <div className="sidebar-text" style={{ display: width === 50 ? "none" : "block" }}>Menu</div>
                    <button className="sidebar-button" onClick={toggleSideBar} ></button>
                </div>
                {items.map(item => {
                    return (
                        <div className="sidebar-item" key={item.icon}>
                            <Icon icon={item.icon} />
                            <div className="sidebar-text" style={{ display: width === 50 ? "none" : "block" }}>{item.text}</div>
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