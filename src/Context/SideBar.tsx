import { createContext, useState } from "react";

export const SideBarContext = createContext({ width: 50, toggleSideBar: () => { } });

export const SideBarProvider = ({ children }: { children: any }) => {

	const [width, setWidth] = useState(50)

	const toggleSideBar = () => {
		if(width === 50) return setWidth(250)
		return setWidth(50)
	}

	return (
		<SideBarContext.Provider value={{width, toggleSideBar }}>
			{children}
		</SideBarContext.Provider>
	)
}