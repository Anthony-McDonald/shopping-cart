import "../css/GamesSidebar.css"

export default function SidebarEntry({ sideText, srcDifferentiator, clickHandler }) {

    const src = "public/assets/svgs/" + srcDifferentiator + ".svg";
    return (
        <div onClick={() => clickHandler(sideText
        )} className="sidebar-entry">

        <div className="sidebar-img-container">
            <img className="sidebar-img" src={src} alt="sidebar-img" />
        </div>
        <h3 className="side-text">{sideText}</h3>
        </div>
    )

}