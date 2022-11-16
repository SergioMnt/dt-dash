import { useContext } from "react";

export const Card = ({title, value}: {title: string, value: number}) => {
    return (
        <div className="card-container">
            <h1>{title}</h1>
            <h2>{value}</h2>
        </div>
    )
}