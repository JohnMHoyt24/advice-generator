import React, { useEffect, useState } from "react";


const Advice: React.FC = () => {
    const [button, setButton] = useState(false);
    const [quote, setQuote] = useState("");
    const [error, setError] = useState(null);

    return(
        <div>
            <div className="bg-[#4c536e] w-200 h-100 border border-hidden rounded-md p-4">
                <p><span className="uppercase text-green-300 font-[Manrope]">Advice #</span></p>
                <p></p>
                <button className="bg-[#007bff] text-black p-5 border rounded-md">Click!</button>
            </div>
        </div>
    );
}

export default Advice;