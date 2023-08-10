import CartItem from "./CartItem";
import { useDispatch,useSelector } from "react-redux";
import { OpenModal , CloseModal } from "../features/modal/modalSlice";
const CartCantainer = () => {
    const CartItems = useSelector((state) => state.cart.cartItems)
    const amount = useSelector((state) => state.cart.amount)
    const total = useSelector((state) => state.cart.total)
    const dispatch = useDispatch();
    if(amount < 1){
        return <section className="cart">
            <header>
                <h2>
                    your bag
                </h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }
    return <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {CartItems.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <div className="cart-total">
                <hr />
                <h4>
                    total <span>${total}</span>
                </h4>
            </div>
            <button className="btn btn-clear" onClick={()=>dispatch(OpenModal())}>clear cart</button>
        </footer>
    </section>
}

export default CartCantainer;