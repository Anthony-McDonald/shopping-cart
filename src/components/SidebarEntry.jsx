import "../css/GamesSidebar.css"

export default function SidebarEntry({ sideText, srcDifferentiator }) {

    const src = "src/assets/svgs/" + srcDifferentiator + ".svg";
    return (
        <div className="sidebar-entry">

        <div className="sidebar-img-container">
            <img className="sidebar-img" src={src} alt="sidebar-img" />
        </div>
        <h3 className="side-text">{sideText}</h3>
        </div>
    )

}