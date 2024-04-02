import SidebarHeader from "./SidebarHeader";
import SidebarEntry from "./SidebarEntry";

export default function SidebarElements({ clickHandler }) {
    return (
        <>
        <SidebarHeader headerText={"New Releases"} />   {/* New Releases  */}
        <SidebarEntry sideText={"Last 30 days"} srcDifferentiator={"recent/last_thirty"} clickHandler={clickHandler}/> {/* Last 30 days */}
        <SidebarEntry sideText={"This week"} srcDifferentiator={"recent/this_week"} clickHandler={clickHandler}/> {/* This week */}
        <SidebarEntry sideText={"Coming soon"} srcDifferentiator={"recent/next_week"} clickHandler={clickHandler}/> {/* Next week */}

        <SidebarHeader headerText={"Tip Top"}/> {/* Top */}
        <SidebarEntry sideText={"Best this year"} srcDifferentiator={"top/best_this_year"} clickHandler={clickHandler}/> {/* Best this year */}
        <SidebarEntry sideText={"Best 2023"} srcDifferentiator={"top/best_2023"} clickHandler={clickHandler}/> {/* Best 2023 */}
        <SidebarEntry sideText={"GOATs"} srcDifferentiator={"top/goat"} clickHandler={clickHandler}/> {/* GOATs */}

        <SidebarHeader headerText={"Platforms"}/> {/* Platforms */}
        <SidebarEntry sideText={"PC"} srcDifferentiator={"platforms/windows"} clickHandler={clickHandler}/> {/* PC */}
        <SidebarEntry sideText={"PlayStation"} srcDifferentiator={"platforms/playstation"} clickHandler={clickHandler}/> {/* Playstation */}
        <SidebarEntry sideText={"Xbox"} srcDifferentiator={"platforms/xbox"} clickHandler={clickHandler}/>{/* Xbox */}
        <SidebarEntry sideText={"Switch"} srcDifferentiator={"platforms/switch"} clickHandler={clickHandler}/> {/* Nintendo Switch */}
        <SidebarEntry sideText={"iOS"} srcDifferentiator={"platforms/ios"} clickHandler={clickHandler}/> {/* iOS */}
        <SidebarEntry sideText={"Android"} srcDifferentiator={"platforms/android"} clickHandler={clickHandler}/> {/* Android */}

        <SidebarHeader headerText={"Genres"}/> {/* Genres */}
        <SidebarEntry sideText={"Action"} srcDifferentiator={"genres/action"} clickHandler={clickHandler}/> {/* Action */}
        <SidebarEntry sideText={"Strategy"} srcDifferentiator={"genres/strategy"} clickHandler={clickHandler}/> {/* Strategy */}
        <SidebarEntry sideText={"RPG"} srcDifferentiator={"genres/rpg"} clickHandler={clickHandler}/> {/* RPG */}
        <SidebarEntry sideText={"Shooter"} srcDifferentiator={"genres/shooter"} clickHandler={clickHandler}/> {/* Shooter */}
        <SidebarEntry sideText={"Adventure"} srcDifferentiator={"genres/adventure"} clickHandler={clickHandler}/> {/* Adventure */}
        <SidebarEntry sideText={"Puzzle"} srcDifferentiator={"genres/puzzle"} clickHandler={clickHandler}/> {/* Puzzle */}
        <SidebarEntry sideText={"Racing"} srcDifferentiator={"genres/racing2"} clickHandler={clickHandler}/> {/* Racing */}
        <SidebarEntry sideText={"Sports"} srcDifferentiator={"genres/sports"} clickHandler={clickHandler}/> {/* Sports */}
        </>
    )
}