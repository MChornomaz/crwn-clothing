import {  Outlet} from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import {selectCurrentUser} from '../../store/user/user.selector'

import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles.jsx';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const dispatch = useDispatch()

    const signOutUser = () => {
        dispatch(signOutStart())

    }

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                    <NavLinks>
                <NavLink className="nav-link" to='/shop'>SHOP</NavLink>

                    {currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)

                : <NavLink className="nav-link" to='/auth'>Sign in</NavLink>}
                <CartIcon />
            </NavLinks>
            </NavigationContainer>
            {isCartOpen && <CartDropdown />}
            <Outlet />
        </>
    );
};

export default Navigation