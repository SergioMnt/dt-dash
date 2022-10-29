import { createContext, useState } from "react";

export const SideBarContext = createContext({ width: false, toggleSideBar: () => { } });

export const SideBarProvider = ({ children }: { children: any }) => {

	const [width, setWidth] = useState(true)

	const toggleSideBar = () => {
		setWidth(!width)
	}

	return (
		<SideBarContext.Provider value={{width, toggleSideBar, }}>
			{children}
		</SideBarContext.Provider>
	)
}