import { createContext, useState } from "react";

export const DataContext = createContext({ displayedDate: Date.now().toString(), refreshDate: () => {} })

export const DataProvider = ({children}: {children: any}) => {

    const [displayedDate, setRefreshedDate] = useState(new Date(Date.now()).toLocaleString())

    const refreshDate = () => {
        setRefreshedDate(new Date(Date.now()).toLocaleString())
    }

    return (
        <DataContext.Provider value={{displayedDate, refreshDate}}>
            {children}
        </DataContext.Provider>
    )
}