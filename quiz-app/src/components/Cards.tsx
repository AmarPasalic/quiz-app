import React from "react";
import arrowIcon from "../assets/images/arrow.svg";
import "../styles/home.css"

interface CardProps {
    title: string;
    desc: string;
    image: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, desc, image, onClick }) => {
    return (
        <div
            className="card"
            style={{ backgroundImage: `url(${image})` }}
            onClick={onClick}
        >
            <div className="card-content">
                <div className="cardTxt">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{desc}</p></div>
                <div className="card-arrow">
                    <img src={arrowIcon} alt="Arrow" />
                </div>

            </div>

        </div>
    );
};

export default Card;