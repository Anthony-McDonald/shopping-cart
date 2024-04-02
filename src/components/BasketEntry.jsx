import "../css/BasketEntry.css"

export default function BasketEntry({key, index, product, removeFromBasket}) {
    return (
        <div className="basket-entry">
            <div className="basket-image">
                <img src={product.imageSrc} alt="product-img" />
            </div>
        <h3 className="product-name">{product.name}</h3>
        <div className="remove-and-price">
        <button onClick={() => removeFromBasket(index)}>Remove from basket</button>
        <h4 className="product-price">£{product.price}</h4>
        </div>


        </div>
    )
}