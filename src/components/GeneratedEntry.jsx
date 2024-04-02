import '../css/GeneratedEntry.css'
import Platform from './Platform';

export default function GeneratedEntry({ entryInfo, index, addToBasket }) {

    const gameName = entryInfo.name;
    const platforms = entryInfo.parent_platforms;
    const art = entryInfo.background_image;
    const price = 9.99;

    return (
        <div className="entry-div">
            <div className="img-container">
            <img className='generated-img' key={index} src={art} alt={`Background ${index}`} />
            </div>
            <h3 className="game-name">{gameName}</h3>
            <div className="shop-functionality">
                <button onClick={() => addToBasket(
                    {
                        name: gameName,
                        imageSrc: art,
                        price: price
                    }
                )} className='shop-button'>Add to basket</button>
                <h3 className='shop-price'>£{price}</h3>
            </div>
            <div className="compatible-platforms">
            {platforms && platforms.length > 0 && (
                platforms.map((platform, index) => (
                    // <GeneratedEntry entryInfo={entry} index={index}></GeneratedEntry>
                    <Platform platform={platform} />
                ))
            )}
            </div>
        </div>
    )
}

