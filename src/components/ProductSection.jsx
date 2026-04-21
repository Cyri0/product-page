import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"
import cart from "../assets/images/icon-cart.svg"
import { useState } from "react"

const ProductSection = () => {
    const [quantity, setQuantity] = useState(0)

    const increase = () => {
            setQuantity(prev => prev < 10 ? prev + 1 : prev)
    }

    const decrease = () => {
            setQuantity(prev => prev > 0 ? prev - 1 : prev)
    }

    return (
        <div>
            <h3 className="eyeBrow">Sneaker Company</h3>

            <h1>Fall Limited Edition Sneakers</h1>

            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <strong>$125.00</strong>
            <span>50%</span>
            <div>$250.00</div>

            <div>
                <div>
                    <button onClick={decrease}><img src={minus}  alt="Minus icon" /></button>
                    <span>{quantity}</span>
                    <button onClick={increase}><img src={plus} alt="Plus icon" /></button>
                </div>
                <button><img src={cart} alt="Cart icon" /> Add to cart</button>
            </div>
        </div>
    )
}

export default ProductSection