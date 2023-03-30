
import Button from './../button/button.component';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import {useNavigate} from 'react-router-dom'
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx'
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const goToCheckoutHandler = () =>{
        dispatch(setIsCartOpen(false))
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length 
                    ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    : (
                        <EmptyMessage>Your Cart is Empty</EmptyMessage>
                    )
                }
                
            </CartItems>

            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown