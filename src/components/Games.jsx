import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import GamesSidebar from "./GamesSidebar";
import SideGenerator from "./SideGenerator";
import "../css/Games.css";
import ShowMore from "./ShowMore";
import { useSidebar } from "./SidebarContext";
import ShoppingSidebar from "./ShoppingSidebar";

const Games = () => {
    const [showMoreClicked, setShowMoreClicked] = useState(false);
    const [sideTitle, setSideTitle] = useState("Home");
    const [filterCriteria, setFilterCriteria] = useState([]);
    const { sidebarVisible, toggleSidebar } = useSidebar();
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target) && sidebarVisible) {
            toggleSidebar();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarVisible && !event.target.closest(".shopping-sidebar-container")) {
                toggleSidebar();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarVisible, toggleSidebar]);

    if (showMoreClicked) {
        return (
            <>
                <Header />
                {sidebarVisible && <ShoppingSidebar />}
                <ShowMore />
                <img className="hamburger white" src="src/assets/svgs/hamburger.svg" alt="burger-menu" onClick={buttonEffect} />
            </>
        );
    } else {
        return (
            <>
                <Header />
                {sidebarVisible && <ShoppingSidebar />}
                <div className="main-games-layout">
                    <GamesSidebar />
                    <SideGenerator onClick={handleClickOutside}  title={sideTitle} filterCriteria={filterCriteria} buttonEffect={buttonEffect} />
                </div>
            </>
        );
    }

    function buttonEffect() {
        setShowMoreClicked(!showMoreClicked);
    }
};

export default Games;