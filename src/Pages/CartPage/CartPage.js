import styles from './CartPage.module.css'
import { useSelector } from 'react-redux'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartProduct from '../../Components/CartProduct/CartProduct'

function CartPage() {
	const navigate = useNavigate()

	const cart = useSelector(state => state.cart)

	const { cartItems, saveLater } = cart

	const totalPriceBeforeDiscount = cartItems.reduce(
		(acc, val) => acc + val.qty * val.MRP,
		0
	)

	const totalPrice = cartItems.reduce(
		(acc, val) =>
			acc +
			(val.MRP * val.qty - val.MRP * val.qty * (val.discount / 100)),
		0
	)

	const cartQty = cartItems.reduce((acc, val) => acc + val.qty, 0)
	const totalDiscountPerctage =
		100 *
		((totalPriceBeforeDiscount - totalPrice) /
			totalPriceBeforeDiscount)

	useEffect(() => {
		if (cartItems.length < 1) {
			navigate('/')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItems])

	return (
		<div className={styles.cart_page}>
			<section className={styles.cartItems}>
				<h2>CartItems</h2>
				{cartItems.map((item, idx) => (
					<CartProduct item={item} key={idx} isItCartItems={true} />
				))}
				{saveLater.length > 0 && <h2>Saved for later</h2>}
				{saveLater?.map((item, idx) => (
					<CartProduct item={item} key={idx} isItCartItems={false} />
				))}
			</section>
			<section className={styles.price_details}>
				<span>Price details</span>
				<p className={styles.price_subInfo}>
					<span>Price ({cartQty} items) :</span>
					<span>&#8377;{totalPriceBeforeDiscount.toFixed(2)}</span>
				</p>
				<p className={styles.price_subInfo}>
					<span>Discount : </span>
					<span>{totalDiscountPerctage.toFixed(2)}% off</span>
				</p>
				<p className={styles.price_subInfo}>
					<span>Total Amount : </span>
					<span>&#8377;{totalPrice.toFixed(2)}</span>
				</p>
			</section>
		</div>
	)
}

export default CartPage
