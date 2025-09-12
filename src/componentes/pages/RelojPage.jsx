import { BtnVolver } from "../ui/buttons/BtnVolver";
import React, { useState, useEffect } from "react";
export const RelojPage =()=>{
    const [hora, setHora] = useState("00:00:00");
    useEffect(()=>{
    const intervalo = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
        },1000);
        return () => clearInterval(intervalo)
    },[]);    
    
    return(
            <div className="h-screen bg-amber-300 text-black flex flex-col justify-center items-center">
                <BtnVolver/>
                <h2 className="text-3xl font-bold">UseEffect</h2>
                <div className="w-60 h-30 rounded-full bg-white border-8 border-black flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-semibold">{hora}</span>
                    </div>
            </div>
        )
    }
