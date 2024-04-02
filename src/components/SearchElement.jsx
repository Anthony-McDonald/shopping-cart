import { useState } from "react"


export default function SearchElement({setSearchInput}) {

    const handleKeyDown = (event) => {
        if (event.code === "Enter") {
        setSearchInput(event.target.value)
        console.log("propogating val: " + event.target.value)
        }
      };
      


    return (
        <>
        <input placeholder="Search Games..." className="search-box" type="text" onKeyDown={handleKeyDown}></input>
        <input type="submit" hidden />
        </>


    )
}