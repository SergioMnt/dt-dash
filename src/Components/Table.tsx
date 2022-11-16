import { useContext } from "react";
import { DataContext } from "../Context/Data";

const tableCols = [
    "Customer ID",
    "Name",
    "Order Date",
    "Order Total",
    "Status",
    "Tentative Arriving Date"
]

export const DataTable = () => {

    const { tableData } = useContext(DataContext)

    const curFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'short', year: "numeric", month: "numeric", day: "numeric"
    })

    return (
        <table className="table">
            <tr>
                {tableCols.map(i => (
                    <th key={i}>{i}</th>
                ))}
            </tr>
            {tableData.map(i => (
                <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{dateFormatter.format(i.lastOrder)}</td>
                    <td>{curFormatter.format(i.total)}</td>
                    <td>
                        <svg height="20px" width="200px" >
                            <rect width="70%" height="100%"  fill="#666666" />
                            <rect height="100%" width={`${i.status*0.7}%`}  fill="#659157" />
                            <text x="150" y="15" fill="#9cafb7" >{i.status}%</text>
                        </svg>
                    </td>
                    <td>{dateFormatter.format(i.tentDate)}</td>
                </tr>
            ))}
        </table>
    )
}