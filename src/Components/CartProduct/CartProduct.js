import React, { Fragment } from 'react'
import styles from './CartProduct.module.css'
import { CartBtn } from '../../Components'
import { useDispatch } from 'react-redux'
import {
	moveTosaveLater,
	removeFromCart,
} from '../../Features/cartSlice'

function CartProduct(props) {
	const { item, isItCartItems } = props
	const dispatch = useDispatch()

	return (
		<div className={styles.cartItem}>
			<div className={styles.image_wrapper}>
				<img
					src={item.img}
					alt={item.name}
					className={styles.cartItem_img}
				/>
			</div>
			<div className={styles.item_info}>
				<p>{item.name}</p>
				<div className={styles.price_info}>
					<span>Price:</span>
					<s>&#8377;{item.MRP}</s>
					<span>{item.discount}% off</span>
					<span>
						&#8377;
						{Math.round(item.MRP - item.MRP * (item.discount / 100))}
					</span>
				</div>
				<span className={styles.cartpage_ctas}>
					{isItCartItems && (
						<Fragment>
							<button
								className={styles.remove_btn}
								onClick={() => dispatch(moveTosaveLater(item.id))}>
								Save for later
							</button>
							<button
								className={styles.remove_btn}
								onClick={() => dispatch(removeFromCart(item.id))}>
								Remove
							</button>
						</Fragment>
					)}

					<CartBtn product={item} />
				</span>
			</div>
		</div>
	)
}

export default CartProduct
