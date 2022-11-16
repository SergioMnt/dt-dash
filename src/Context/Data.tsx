import { createContext, useEffect, useState } from "react";
import { randBet } from "../customFuncs/Colors";
import { GetName } from "../customFuncs/Names";

const numberOfRows: number = randBet(0, 500)

type person = {
    id: number,
    name: string,
    lastOrder: Date,
    total: number,
    status: number,
    tentDate: Date
}

const dataArr: person[] = []

const initData: person[] = []

type ticketsStatus = {
    completed: number,
    in_progress: number,
    pending: number
}

const initTicketsAmount: ticketsStatus = {
    completed: 0,
    in_progress: 0,
    pending: 0
}

const initValue = {
    displayedDate: Date.now().toString(),
    refreshDate: () => {},
    titleData: "",
    notif: false,
    tableData: initData,
    ticketsAmount: initTicketsAmount
}

export const DataContext = createContext(initValue)

export const DataProvider = ({children}: {children: any}) => {

    const [displayedDate, setRefreshedDate] = useState(new Date(Date.now()).toLocaleString())
    const [titleData, setTitleData] = useState("")
    const [notif, setNotif] = useState(false)
    const [tableData, setTableData] = useState<person[]>([])
    const [ticketsAmount, setTicketsAmount] = useState<ticketsStatus>(initTicketsAmount)

    const refreshDate = () => {
        setRefreshedDate(new Date(Date.now()).toLocaleString())
        setTitleData(randBet(0, 100).toString())
        setNotif(!notif)
        refreshticketAmont()
        refreshData()
    }

    useEffect(() => {
        refreshticketAmont()
        refreshData()
    },[])

    const refreshticketAmont = () => {
        setTicketsAmount({
            completed: randBet(0, 100),
            in_progress: randBet(0, 100),
            pending: randBet(0, 100)
        })
    }

    const refreshData = () => {
        dataArr.splice(0, dataArr.length)
        const date = new Date()
        for (let i = 0; i < numberOfRows; i++) {
            let diffDates: number = randBet(0, 100)
            let person: person = {
                id: randBet(0, 1000),
                name: GetName(randBet(0, 10000)),
                lastOrder: new Date(date.setDate(date.getDate() - diffDates)),
                total: randBet(1000, 100000),
               status: randBet(0, 100),
               tentDate: new Date(date.setDate(date.getDate() + diffDates/2)) 
            }
            dataArr.push(person)
        }
        setTableData(dataArr)
    }

    return (
        <DataContext.Provider value={{displayedDate, refreshDate, titleData, notif, tableData, ticketsAmount}}>
            {children}
        </DataContext.Provider>
    )
}