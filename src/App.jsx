import { useSelector , useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import CartCantainer from "./components/cartContainer";
import { useEffect } from "react";
import {calculateTotal, getCartItems} from './features/cart/cartSlice'
import Modal from "./components/Modal";
function App() {
  const {cartItems , isLoading} = useSelector((state) => state.cart)
  const {isOpen} = useSelector((state) => state.modal)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(calculateTotal())
  } , [cartItems])

  useEffect(()=> {
    dispatch(getCartItems())
  } , [])

  if(isLoading){
    return <div className="loading">Loading ...</div>
  }
  return (
    <main>
      {isOpen && <Modal/>}
      
      <Navbar/>
      <CartCantainer/>
    </main>
  );
}
export default App;