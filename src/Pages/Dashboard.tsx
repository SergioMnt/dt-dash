import { useContext } from "react";
import { DataContext } from "../Context/Data";

import { Icon } from "../Components/default";

export const Default = () => {

    const { displayedDate,refreshDate } = useContext(DataContext)

    return(
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
            <div className="dashboard-block"></div>
        </div>
    )
}