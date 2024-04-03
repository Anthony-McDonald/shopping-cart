import "../css/SideGenerator.css"
import { useEffect, useState } from "react";
import React from "react";
import useApiData from "./useApi";
import GeneratedEntry from "./GeneratedEntry";

export default function SideGenerator({title, buttonEffect, addToBasket, filterCriteria, searchInput}) {
    const pageSize = 32;
    const API_KEY = process.env.RAWG_API_KEY
    console.log(API_KEY);
    const API_KEY_QUERIED = useApiData('https://api.netlify.com/api/v1/accounts/anthony-mcdonald/env/')
    console.log('Environment variables:');
    console.log(API_KEY_QUERIED);
    const baseApiURL = 'https://rawg.io/api/games?token&key=' + API_KEY + '&page_size=' + pageSize;
    const [alterableApiURL, setAlterableApiURL] = useState(baseApiURL);

    useEffect(() => {
        let currentApiURL = baseApiURL;
        const currentDate = new Date();
        console.log(filterCriteria);
        switch (filterCriteria) {
// -----------------------------------------------------
// Date based
// -----------------------------------------------------
            case 'Last 30 days':
                let thirtyDaysAgo = new Date(currentDate); // Clone the currentDate object
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                currentApiURL += '&dates=' + formatDate(thirtyDaysAgo) + ',' + formatDate(currentDate);
                console.log(currentApiURL);
                break;
            case 'This week':
                let aWeekAgo = new Date(currentDate);
                aWeekAgo.setDate(aWeekAgo.getDate() - 7);
                currentApiURL += '&dates=' + formatDate(aWeekAgo) + ',' + formatDate(currentDate);
                break;
            case 'Coming soon':
                let aWeekForward = new Date(currentDate);
                aWeekForward.setDate(aWeekForward.getDate() + 7);
                currentApiURL += '&dates=' + formatDate(currentDate) + ',' + formatDate(aWeekForward);
                break;
// -----------------------------------------------------
// Rating Based
// -----------------------------------------------------
            case 'Best this year':
                currentApiURL += '&dates=2024-01-01,' + formatDate(currentDate);
                break;
            case 'Best 2023':
                currentApiURL += '&dates=2023-01-01,2023-12-31';
                break;
            case 'GOATs':
                currentApiURL += '&dates=1990-01-01,2023-12-31';
                break;
// -----------------------------------------------------
// platforms
// -----------------------------------------------------
            case 'PC':
                currentApiURL += "&parent_platforms=" + 1;   
                // correct
                break;
            case 'PlayStation':
                currentApiURL += "&parent_platforms=" + 2;
                                // correct
                break;
            case 'Xbox':
                currentApiURL += "&parent_platforms=" + 3;
                                // correct
                break;
            case 'Switch':
                currentApiURL += "&parent_platforms=" + 7;
                                // correct
                break;
            case 'iOS':
                console.log ("ios called")
                currentApiURL += "&parent_platforms=" + 4;
                                // correct
                break;
            case 'Android':
                currentApiURL += "&parent_platforms=" + 8;
                                // correct
                break;
// -----------------------------------------------------
// genres
// -----------------------------------------------------
            case 'Action':
                currentApiURL += "&genres=" + 4;
            // correct
                break;
            case 'Strategy':
                currentApiURL += "&genres=" + 10;
            // correct
                break;
            case 'RPG':
                currentApiURL += "&genres=" + 5;
            // correct
                break;
            case 'Shooter':
                currentApiURL += "&genres=" + 2;
            // correct
                break;
            case 'Adventure':
                currentApiURL += "&genres=" + 3;
            // correct
                break;
            case 'Puzzle':
                currentApiURL += "&genres=" + 7;
            // correct
                break;
            case 'Racing':
                currentApiURL += "&genres=" + 1;
            // correct
                break;
            case 'Sports':
                currentApiURL += "&genres=" + 15;
            // correct
                break;
            default:
                break;
        }
        console.log("api to print from is: " + currentApiURL)
        setAlterableApiURL(currentApiURL);
    }, [filterCriteria])

    useEffect(() => {
        console.log("search input change detected")
        let currentApiURL = baseApiURL;
        currentApiURL += formatSearch(searchInput);
        currentApiURL += "&page_size=" + pageSize
        currentApiURL += "&search=" + formatSearch(searchInput);
        console.log("api to print from is: " + currentApiURL)
        setAlterableApiURL(currentApiURL);
    },[searchInput])

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function formatSearch(searchString) {
        return searchString.replace(/\s+/g, '-');
        
    }




    const data = useApiData(alterableApiURL);
    const [entries, setEntries] = useState(null);
    if (data != null) {
    
        if (entries === null || entries.length !== data.results.length) {
            setEntries(data.results);
        } else {

            const entriesChanged = entries.some((entry, index) => entry !== data.results[index]);
            

            if (entriesChanged) {
                setEntries(data.results);
            }
        }
    }
    if (entries != null) {
    }




    return (
        <div className="gen-layout">
                <h1 className="gen-title">{title}</h1>
                <div className="side-gen">

                {entries && entries.length > 0 && (entries.filter(entry => entry.name !== "Content Warning")
    .map((entry, index) => (
        <GeneratedEntry key={index} entryInfo={entry} index={index} addToBasket={addToBasket}></GeneratedEntry>
    ))
)}



            <div className="hamburger-holder">
            <img className="hamburger white"src="/assets/svgs/hamburger.svg" alt="burger-menu" onClick={buttonEffect} />
            </div>
            

        </div>

        </div>



        
    )


}

