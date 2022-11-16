import { useContext } from "react";
import { DataContext } from "../Context/Data";
import { Card } from "../Components/Card";
import { DataTable } from "../Components/Table";

import { Icon } from "../Components/default";

import { useLocation } from "react-router-dom";

export const Default = () => {

    const { displayedDate, refreshDate, ticketsAmount } = useContext(DataContext)

    console.log(useLocation().pathname)

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div className="dashboard-header-title">Open Tickets</div>
                <div className="dashboard-header-date">
                    <button onClick={refreshDate}>
                        <Icon icon="refresh" />
                    </button>
                    {displayedDate}
                </div>
            </div>
            <div className="dashboard-toprow">
                <Card title="Total" value={ticketsAmount.completed+ticketsAmount.in_progress+ticketsAmount.pending} />
                <Card title="Completed" value={ticketsAmount.completed} />
                <Card title="In Progress" value={ticketsAmount.in_progress} />
                <Card title="Pending" value={ticketsAmount.pending} />
            </div>
            <div className="dashboard-bottomrow">
                <DataTable />
            </div>
        </div>
    )
}