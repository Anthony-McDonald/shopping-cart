import "../css/ShowMore.css"

import SidebarElements from "./SidebarElements"

export default function ShowMore({ clickHandler }) {
    return (
        <div className="showmore-container">
            <SidebarElements clickHandler={clickHandler}/>
        </div>
    )
}