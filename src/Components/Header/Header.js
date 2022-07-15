import styles from './Header.module.css'
import { IcBaselineShoppingCart } from '../../Assets/Icones'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className={styles.header_fixed}>
			<Link to='/'>Flipkart</Link>
			<Link to='/cart' className={styles.cart_logo}>
				<IcBaselineShoppingCart />
				<span>Cart</span>
			</Link>
		</header>
	)
}

export default Header
