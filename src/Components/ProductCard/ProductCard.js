import React from 'react'
import styles from '../ProductCard/ProductCard.module.css'
import { CartBtn } from '../../Components'

function ProductCard(props) {
	const { product } = props

	return (
		<div className={styles.productCard}>
			<div className={styles.imgWrapper}>
				<img
					src={product.img}
					alt={product.name}
					className={styles.productImg}
				/>
			</div>
			<div className={styles.productDetails}>
				<p className={styles.companyName}>{product.companyName}</p>
				<p className={styles.productName}>{product.name}</p>
				<p className={styles.price}>
					<span>Price:</span>
					<s className={styles.mrp}>&#8377;{product.MRP}</s>
					<span className={styles.discount}>
						{product.discount}%off
					</span>
					<span className={styles.discountedPrice}>
						&#8377;
						{Math.round(
							product.MRP -
								product.MRP * (product.discount / 100).toFixed(2)
						)}
					</span>
				</p>
				<CartBtn product={product} />
			</div>
		</div>
	)
}

export default ProductCard
