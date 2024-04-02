import React from "react";
import { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
        console.log("sidebar toggled")
    }

    return (
        <SidebarContext.Provider value={{sidebarVisible, toggleSidebar}}>
            { children }
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    return useContext(SidebarContext);
};