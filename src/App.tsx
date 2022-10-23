import { useContext } from 'react';
import './App.scss';
import { Navbar, SideBar } from "./Components/Navs";

import { SideBarContext } from "./Context/SideBar";
import { DataProvider } from "./Context/Data";

export const App = () => {

	const { width } = useContext(SideBarContext)

	return (
		<DataProvider>
			<Navbar />
			<div className="content-sidebar">
				<SideBar />
				<div className="content" style={{ width: `calc(100% - ${width ? 50 : 200}px)` }}></div>
			</div>
		</DataProvider>
	)
}