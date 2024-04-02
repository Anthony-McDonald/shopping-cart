import SidebarHeader from "./SidebarHeader";
import SidebarEntry from "./SidebarEntry";

export default function SidebarElements() {
    return (
        <>
        <SidebarHeader headerText={"New Releases"} />   {/* New Releases  */}
        <SidebarEntry sideText={"Last 30 days"} srcDifferentiator={"recent/last_thirty"} /> {/* Last 30 days */}
        <SidebarEntry sideText={"This week"} srcDifferentiator={"recent/this_week"}/> {/* This week */}
        <SidebarEntry sideText={"Coming soon"} srcDifferentiator={"recent/next_week"}/> {/* Next week */}

        <SidebarHeader headerText={"Tip Top"}/> {/* Top */}
        <SidebarEntry sideText={"Best this year"} srcDifferentiator={"top/best_this_year"}/> {/* Best this year */}
        <SidebarEntry sideText={"Best 2023"} srcDifferentiator={"top/best_2023"}/> {/* Best 2023 */}
        <SidebarEntry sideText={"GOATs"} srcDifferentiator={"top/goat"}/> {/* GOATs */}

        <SidebarHeader headerText={"Platforms"}/> {/* Platforms */}
        <SidebarEntry sideText={"PC"} srcDifferentiator={"platforms/windows"}/> {/* PC */}
        <SidebarEntry sideText={"PlayStation"} srcDifferentiator={"platforms/playstation"}/> {/* Playstation */}
        <SidebarEntry sideText={"Xbox"} srcDifferentiator={"platforms/xbox"}/>{/* Xbox */}
        <SidebarEntry sideText={"Switch"} srcDifferentiator={"platforms/switch"}/> {/* Nintendo Switch */}
        <SidebarEntry sideText={"iOS"} srcDifferentiator={"platforms/ios"}/> {/* iOS */}
        <SidebarEntry sideText={"Android"} srcDifferentiator={"platforms/android"}/> {/* Android */}

        <SidebarHeader headerText={"Genres"}/> {/* Genres */}
        <SidebarEntry sideText={"Action"} srcDifferentiator={"genres/action"}/> {/* Action */}
        <SidebarEntry sideText={"Strategy"} srcDifferentiator={"genres/strategy"}/> {/* Strategy */}
        <SidebarEntry sideText={"RPG"} srcDifferentiator={"genres/rpg"}/> {/* RPG */}
        <SidebarEntry sideText={"Shooter"} srcDifferentiator={"genres/shooter"}/> {/* Shooter */}
        <SidebarEntry sideText={"Adventure"} srcDifferentiator={"genres/adventure"}/> {/* Adventure */}
        <SidebarEntry sideText={"Puzzle"} srcDifferentiator={"genres/puzzle"}/> {/* Puzzle */}
        <SidebarEntry sideText={"Racing"} srcDifferentiator={"genres/racing2"}/> {/* Racing */}
        <SidebarEntry sideText={"Sports"} srcDifferentiator={"genres/sports"}/> {/* Sports */}
        </>
    )
}