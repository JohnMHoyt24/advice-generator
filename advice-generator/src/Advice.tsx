import React, { useState } from "react";


const Advice: React.FC = () => {
    interface Advice {
        slip: {
            id: number;
            advice: string;
        }
    }

    const [advice, setAdvice] = useState<Advice | null>(null);
    const [loading, setLoading] = useState(false);

    async function fetchAdvice(){
        setLoading(true);
        try {
            const response = await fetch('https://api.adviceslip.com/advice');

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: Advice = await response.json();
            setAdvice(data);
        }

        catch (error) {
            console.error("Error fetching advice: ", error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div>
            <div className="bg-[#4c536e] w-200 h-100 border border-hidden rounded-md p-4">
                <p className="text-center"><span className="uppercase text-green-300 font-[Manrope] text-[12px] font-bold">Advice #{advice?.slip.id || "?"}</span></p>
                <p className="text-white text-center text-[25px]">"{advice?.slip.advice || "Click the button for advice"}"</p>
                <div className="flex justify-center mt-4">
                    <button className="bg-[#007bff] text-black p-5 border rounded-md" onClick={fetchAdvice} disabled={loading}>
                        {loading ? "Loading..." : "Click!"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Advice;