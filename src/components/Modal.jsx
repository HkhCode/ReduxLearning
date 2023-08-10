import { useDispatch } from "react-redux";
import { OpenModal , CloseModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
    const dispatch = useDispatch();
    return <aside className="modal-container">
        <div className="modal">
            <h4>remove all items from your shopping cart ?</h4>
            <div className="btn-container">
                <button type="button" className="btn confirm-btn" onClick={()=> {
                    dispatch(clearCart())
                    dispatch(CloseModal())
                }}>confirm</button>
                <button type="button" className="btn clear-btn" onClick={() => {
                    dispatch(CloseModal())
                }}>clear</button>
            </div>
        </div>

    </aside>
}
export default Modal;