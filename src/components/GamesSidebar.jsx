import SidebarHeader from "./SidebarHeader";
import SidebarEntry from "./SidebarEntry";

export default function GamesSidebar() {
    return (
        <div id="sidebar">
        <SidebarHeader headerText={"New Releases"} />   {/* New Releases  */}
        <SidebarEntry sideText={"testText"} /> {/* Last 30 days */}
        <SidebarEntry /> {/* This week */}
        <SidebarEntry /> {/* Next week */}

        <SidebarHeader /> {/* Top */}
        <SidebarEntry /> {/* Best this year */}
        <SidebarEntry /> {/* Best 2023 */}
        <SidebarEntry /> {/* GOATs */}

        <SidebarHeader /> {/* Platforms */}
        <SidebarEntry /> {/* PC */}
        <SidebarEntry /> {/* Playstation */}
        <SidebarEntry /> {/* Xbox */}
        <SidebarEntry /> {/* Nintendo Switch */}
        <SidebarEntry /> {/* iOS */}
        <SidebarEntry /> {/* Android */}

        <SidebarHeader /> {/* Genres */}
        <SidebarEntry /> {/* Action */}
        <SidebarEntry /> {/* Strategy */}
        <SidebarEntry /> {/* RPG */}
        <SidebarEntry /> {/* Shooter */}
        <SidebarEntry /> {/* Adventure */}
        <SidebarEntry /> {/* Puzzle */}
        <SidebarEntry /> {/* Racing */}
        <SidebarEntry /> {/* Sports */}


        </div>


    )
}