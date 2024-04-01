import "../css/SideGenerator.css"
import { useState } from "react";

export default function SideGenerator({title, filterCriteria, buttonEffect}) {
    const [sectionTitle, setSectionTitle] = useState(title);
    const [genArray, setGenArray] = useState([]);
    return (
        <div className="side-gen">
                        <div className="hamburger-holder">
            <img className="hamburger white"src="src/assets/svgs/hamburger.svg" alt="burger-menu" onClick={buttonEffect} />
            </div>
            <h1 className="gen-title">{sectionTitle}</h1>


            <div className="hamburger-holder">
            <img className="hamburger white"src="src/assets/svgs/hamburger.svg" alt="burger-menu" onClick={buttonEffect} />
            </div>

        </div>

        
    )
}