import "../css/SideGenerator.css"
import { useEffect, useState } from "react";
import React from "react";
import useApiData from "./useApi";
import GeneratedEntry from "./GeneratedEntry";

export default function SideGenerator({title, buttonEffect}) {
    const data = useApiData('https://rawg.io/api/games?token&key=51e34b4a709042cea1f24c2bac77db00')
    const [entries, setEntries] = useState(null);
    if (data != null) {
        // Check if entries is null or if its length differs from data.results
        if (entries === null || entries.length !== data.results.length) {
            setEntries(data.results);
        } else {
            // Compare each element in the arrays
            const entriesChanged = entries.some((entry, index) => entry !== data.results[index]);
            
            // If any element differs, update entries
            if (entriesChanged) {
                setEntries(data.results);
            }
        }
    }
    if (entries != null) {
        console.log(entries);
    }




    return (
        <div className="gen-layout">
                <h1 className="gen-title">{title}</h1>
                <div className="side-gen">

                {entries && entries.length > 0 && (
                entries.map((entry, index) => (
                    <GeneratedEntry entryInfo={entry} index={index}></GeneratedEntry>
                ))
            )}



            <div className="hamburger-holder">
            <img className="hamburger white"src="src/assets/svgs/hamburger.svg" alt="burger-menu" onClick={buttonEffect} />
            </div>
            

        </div>

        </div>



        
    )


}

