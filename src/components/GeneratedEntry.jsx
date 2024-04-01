import '../css/GeneratedEntry.css'
import Platform from './Platform';

export default function GeneratedEntry({ entryInfo, index }) {

    const gameName = entryInfo.name;
    const platforms = entryInfo.parent_platforms;
    const art = entryInfo.background_image;
    const price = "$9.99"

    return (
        <div className="entry-div">
            <img key={index} src={art} alt={`Background ${index}`} />
            <div className="shop-functionality"></div>
            <div className="compatible-platforms">
            {platforms && platforms.length > 0 && (
                platforms.map((platform, index) => (
                    // <GeneratedEntry entryInfo={entry} index={index}></GeneratedEntry>
                    <Platform platform={platform} />
                ))
            )}
            </div>
            <h3 className="game-name">{gameName}</h3>
        </div>
    )
}