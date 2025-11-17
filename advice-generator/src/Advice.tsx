import React, { useState } from "react";
import Divider from "./Divider";
import Icon from "./Icon";

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
            <div className="bg-[#4c536e] relative w-200 h-80 border border-hidden rounded-md p-4">
                <p className="text-center"><span className="uppercase text-green-300 font-[Manrope] text-[12px] font-bold tracking-[0.3em]">Advice #{advice?.slip.id || "?"}</span></p>
                <p className="text-white text-center text-[25px] font-semibold">
                    "{advice?.slip.advice || "Click the button for advice"}"</p>
                <div>
                    <Divider />
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-green-400 absolute bottom-10 mt-auto hover:shadow-xl hover:shadow-green-500 text-black p-5 border border-transparent font-bold py-2 px-4
                        rounded-full transition-all duration-300 w-16 h-16 flex items-center justify-center ml-2"
                        onClick={fetchAdvice} disabled={loading}>
                        <Icon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Advice;