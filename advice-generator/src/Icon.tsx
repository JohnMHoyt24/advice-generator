import React from "react";
import diceIcon from "./assets/icon-dice.svg";

const Icon: React.FC = () => {
    return(
        <div className="flex justify-center my-4">
            <img src={diceIcon} alt="Dice Icon" className="mx-4"/>
        </div>
    );
}

export default Icon;