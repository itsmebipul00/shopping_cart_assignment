import styles from './Cartbtn.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	addtoCart,
	removeFromCart,
	increaseItemQty,
	decreaseItemQty,
} from '../../Features/cartSlice'

function CartBtn(props) {
	const { product } = props

	const dispatch = useDispatch()

	const cartItems = useSelector(state => state.cart.cartItems)

	const isAlreadyInCart =
		cartItems.find(item => item.id === product.id) ?? false

	const cartQty = cartItems?.find(item => item.id === product.id)?.qty

	return (
		<span>
			{!isAlreadyInCart && (
				<button
					className={styles.cart_btn}
					onClick={() => dispatch(addtoCart(product))}>
					Add to Cart
				</button>
			)}
			{isAlreadyInCart && (
				<span>
					<button
						className={styles.cart_updateBtn}
						onClick={() =>
							cartQty === 1
								? dispatch(removeFromCart(product.id))
								: dispatch(decreaseItemQty(product.id))
						}>
						-
					</button>
					<span> {cartQty} </span>
					<button
						className={styles.cart_updateBtn}
						onClick={() => dispatch(increaseItemQty(product.id))}>
						+
					</button>
				</span>
			)}
		</span>
	)
}

export default CartBtn
