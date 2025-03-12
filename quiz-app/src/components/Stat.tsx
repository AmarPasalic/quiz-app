import React from 'react'

interface StatProps {
    icon: string;
    title?: string;
    color: string;
    number: number;
}

const Stat: React.FC<StatProps> = ({ icon, title, color, number }) => {
    return (
        <div style={{ height: "90%", display: 'flex', alignItems: "center", borderRadius: "5px", boxShadow: "0 4px 10px 1px rgba(0, 0, 0, 0.15)", padding: "10px", width: "auto" }} className='stat'>
        <img style={{ width: "24px", aspectRatio: 1 / 1 }} src={icon} alt="icon" />
        <h1 style={{ color: color, fontSize: "20px", margin: "0 10px" }}>{title || ""}: <span>{number}</span>{color === "#9747FF" && "s"}</h1>
    </div>
    )
}

export default Stat