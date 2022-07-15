import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/cartSlice.js'

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
})

export default store
