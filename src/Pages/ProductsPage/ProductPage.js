import productServices from '../../Services/productsServices'

import { useEffect, useState } from 'react'

import { ProductCard } from '../../Components'

import styles from './Products.module.css'

function ProductPage() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		;(async () => {
			const data = await productServices.getProducts()
			setProducts(data)
		})()
	}, [])

	return (
		<div className={styles.products}>
			{products?.map((product, idx) => (
				<ProductCard product={product} key={idx} />
			))}
		</div>
	)
}

export default ProductPage
