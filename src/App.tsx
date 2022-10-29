import { useContext } from 'react';
import './App.scss';
import { Navbar, SideBar } from "./Components/Navs";

import { SideBarContext } from "./Context/SideBar";
import { DataProvider } from "./Context/Data";
import { CustomRouterProvider } from "./Context/Router";

import { router } from "./Router";
import { RouterProvider } from "react-router-dom";

export const App = () => {

	const { width } = useContext(SideBarContext)

	return (
		<DataProvider>
			<CustomRouterProvider>
				<Navbar />
				<div className="content-sidebar">
					<SideBar />
					<div className="content" style={{ width: `calc(100% - ${width ? 50 : 200}px)` }}>
						<RouterProvider router={router} />
					</div>
				</div>
			</CustomRouterProvider>
		</DataProvider>
	)
}