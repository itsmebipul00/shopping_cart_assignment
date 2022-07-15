import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ProductsPage, CartPage } from './Pages'
import { Header } from './Components'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<ProductsPage />} />
					<Route path='/cart' element={<CartPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App
