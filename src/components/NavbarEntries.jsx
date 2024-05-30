import React from "react";
import { useNavigate } from "react-router-dom";


export function NavbarEntries(){
    const navigate= useNavigate();
    const toHome = function(){
        navigate("/")
    }
    return(
        <>
            <header className="flex justify-between items-center pl-5">
                <h1 className="text-4xl font-bold text-pink-600">Entries</h1>
                <button className="p-2 bg-cyan-700 text-gray-300 text-xl font-semibold rounded" onClick={() => toHome()}>Go Back</button>
            </header>
        </>
    )
}