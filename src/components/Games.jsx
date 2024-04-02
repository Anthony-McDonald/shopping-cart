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
    const [basket, setBasket] = useState([]);
    const ref = useRef(null);

    const addItem = (item) => {
        setBasket([...basket, item]);
        console.log(basket);
    };

    const removeItem = (index) => {
        console.log("index passed through is: " + index)
        const updatedBasket = [...basket];
        updatedBasket.splice(index, 1);
        setBasket(updatedBasket);
    };

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
                <Header showCart={true}/>
                <ShoppingSidebar sidebarVisible={sidebarVisible} basketArray={basket} removeFromBasket={removeItem} /> 
                <ShowMore />
                <img className="hamburger white" src="src/assets/svgs/hamburger.svg" alt="burger-menu" onClick={buttonEffect} />
            </>
        );
    } else {
        return (
            <>
                <Header showCart={true}/>
                <ShoppingSidebar sidebarVisible={sidebarVisible} basketArray={basket} removeFromBasket={removeItem} />
                <div className="main-games-layout">
                    <GamesSidebar />
                    <SideGenerator onClick={handleClickOutside}  title={sideTitle} filterCriteria={filterCriteria} buttonEffect={buttonEffect} addToBasket={addItem} />
                </div>
            </>
        );
    }

    function buttonEffect() {
        setShowMoreClicked(!showMoreClicked);
    }
};

export default Games;