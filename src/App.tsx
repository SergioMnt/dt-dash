import { useContext } from 'react';
import './App.scss';
import { Navbar, SideBar } from "./Components/Navs";

import { SideBarContext } from "./Context/SideBar";
import { ThemeContext } from "./Context/Theme";

import { DataContext } from "./Context/Data";
import { CustomRouterProvider } from "./Context/Router";

import { router } from "./Router";
import { RouterProvider } from "react-router-dom";

import { Helmet } from "react-helmet";

export const App = () => {

	const { width } = useContext(SideBarContext)
	const { theme } = useContext(ThemeContext)
	const { titleData, notif } = useContext(DataContext)

	return (
		<CustomRouterProvider>
			<Navbar />
			<div className="content-sidebar">
				<SideBar />
				<div className={`content content${theme}`} style={{ width: `calc(100% - ${width}px)` }}>
					<RouterProvider router={router} />
				</div>
			</div>
		</CustomRouterProvider>
	)
}