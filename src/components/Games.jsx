import Header from "./Header";
import GamesSidebar from "./GamesSidebar";
import SideGenerator from "./SideGenerator";
import "../css/Games.css"
import { useState } from "react";

const Games = () => {
    // const {name} = useParams();
    const [showMoreClicked, setShowMoreClicked] = useState(false);
    const [sideTitle, setSideTitle] = useState("Home");
    const [filterCriteria, setFilterCriteria] = useState([]);

    if (showMoreClicked) {
        return (
            <>
            <Header/>
            <h1>showMoreClicked</h1>
            {/* <GamesSidebar /> */}
            <img className="hamburger white"src="src/assets/svgs/hamburger.svg" alt="burger-menu" onClick={buttonEffect} />
            </>
        )
    }
    if (!showMoreClicked) {
        return (
            <>
                <Header />
                <div className="main-games-layout">
                    {/* <GamesSidebar /> */}
                    <SideGenerator title={sideTitle} filterCriteria={filterCriteria} buttonEffect={buttonEffect}/>
                </div>
                
    
    

    
            
            
            </>
        )
    }
    function buttonEffect() {
        console.log("clicked")
        setShowMoreClicked(true);
    }
}


export default Games;
