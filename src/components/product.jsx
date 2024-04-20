import { createContext, useContext, useState } from "react";
const CounterContext = createContext(null);

const Product = ({ title, thumbnail, brand, price, description }) => {

    const [count, setCount] = useState(0);
    const handleCount = (operand) => {
        if (operand == "add") {
            setCount(count + 1);
        }
        else {
            count > 0 && setCount(count - 1);
        }
    }
    return (
        <>
            <CounterContext.Provider value={count}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="product d-flex align-items-center gap-4">
                        <div className="image">
                            <img src={thumbnail} className="img-thumbnail" alt={title} />
                        </div>
                        <div className="product-details">
                            <div className="h4 text-uppercase">{brand} {title}</div>
                            <div className="h6 text-uppercase">{description}</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="h6"><span className="h6 text-uppercase text-secondary">Price : </span>${price}</div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={() => handleCount("add")}>+</button>
                            <button type="button" className="btn"><span className="h6 text-uppercase text-secondary">Quantity : </span>{count}</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleCount("sub")}>-</button>
                        </div>
                    </div>
                </div>
                <hr />
                <CartPricing price={price} />
            </CounterContext.Provider>
        </>
    )
}

const CartPricing = ({ price }) => {
    const count = useContext(CounterContext);
    return (
        <>
            <div className="container cart">
                <div className="subtotal d-flex justify-content-between">
                    <div className="h6 text-secondary">SUBTOTAL</div>
                    <div className="h6">${price * count}</div>
                </div>
                <div className="shipping d-flex justify-content-between">
                    <div className="h6 text-secondary">SHIPPING</div>
                    <div className="h6">FREE</div>
                </div>
            </div>
            <hr />
            <div className="container d-flex justify-content-between">
                <div className="h6">TOTAL</div>
                <div className="h6">${price * count}</div>
            </div>
        </>
    )
}

export default Product;