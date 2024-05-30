import React from "react";
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const navigate= useNavigate();
    const toEntries = function(){
        navigate("/entries")
    }
    return(
        <>
            <header className="flex justify-between items-center pl-5">
                <h1 className="md:text-4xl text-3xl font-bold text-cyan-600">Code<span className="text-pink-600">Run</span></h1>
                <button className="p-2 bg-cyan-700 text-gray-300 text-xl font-semibold rounded" onClick={() => toEntries()}>Entries</button>
            </header>
        </>
    )
}