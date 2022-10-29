import { useState, createContext, useEffect } from "react";
import { redirect, useLocation } from "react-router-dom";

type route = {
    icon: string,
    text: string,
    link: string
}

type routes = route[]

export const routes: routes = [
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

export const RouterContext = createContext({ title: "", navigate: (route: route) => { } });

export const CustomRouterProvider = ({ children }: { children: any }) => {

    const [title, setTitle] = useState("")

    const navigate = (route: route) => {
        setTitle(route.text)
        return redirect(route.link)
    }

    useEffect(() => {
        setTitle("Hello")
    }, [])

    return(
        <RouterContext.Provider value={{title, navigate, }}>
            {children}
        </RouterContext.Provider>
    )
}