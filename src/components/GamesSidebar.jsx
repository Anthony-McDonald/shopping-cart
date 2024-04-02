import SidebarElements from "./SidebarElements";


export default function GamesSidebar({ clickHandler }) {
    return (
        <div id="sidebar">

        <SidebarElements clickHandler={clickHandler} />

        </div>


    )
}