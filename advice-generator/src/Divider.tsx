import React from "react";
import Image from "./assets/pattern-divider-desktop.svg";

const Divider: React.FC = () => {
    return(
        <div className="flex justify-center my-4">
            <hr className="w-3/4 border-t border-gray-300"/>
            <img src={Image} alt="Divider" className="mx-4"/>
            <hr className="w-3/4 border-t border-gray-300"/>
        </div>
    );
}

export default Divider;