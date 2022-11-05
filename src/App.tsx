import { useContext } from 'react';
import './App.scss';
import { Navbar, SideBar } from "./Components/Navs";

import { SideBarContext } from "./Context/SideBar";
import { ThemeContext } from "./Context/Theme";

import { DataProvider } from "./Context/Data";
import { CustomRouterProvider } from "./Context/Router";

import { router } from "./Router";
import { RouterProvider } from "react-router-dom";

export const App = () => {

	const { width } = useContext(SideBarContext)
	const { theme } = useContext(ThemeContext)

	return (
		<DataProvider>
			<CustomRouterProvider>
				<Navbar />
				<div className="content-sidebar">
					<SideBar />
					<div className={`content content${theme}`} style={{ width: `calc(100% - ${width}px)` }}>
						<RouterProvider router={router} />
					</div>
				</div>
			</CustomRouterProvider>
		</DataProvider>
	)
}