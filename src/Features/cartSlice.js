import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
	saveLater: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addtoCart: (state, action) => {
			const item = { ...action.payload, qty: 1 }
			state.cartItems = [...state.cartItems, item]
			state.saveLater = state.saveLater.filter(
				item => item.id !== action.payload.id
			)
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				item => item.id !== action.payload
			)
		},
		increaseItemQty: (state, action) => {
			state.cartItems = state.cartItems.map(item =>
				item.id === action.payload
					? { ...item, qty: item.qty + 1 }
					: item
			)
		},
		decreaseItemQty: (state, action) => {
			state.cartItems = state.cartItems.map(item =>
				item.id === action.payload
					? { ...item, qty: item.qty - 1 }
					: item
			)
		},
		moveTosaveLater: (state, action) => {
			let item = state.cartItems.find(
				item => item.id === action.payload
			)
			delete item.qty
			state.saveLater = [...state.saveLater, item]
			state.cartItems = state.cartItems.filter(
				item => item.id !== action.payload
			)
		},
	},
})

export const {
	addtoCart,
	removeFromCart,
	decreaseItemQty,
	increaseItemQty,
	moveTosaveLater,
} = cartSlice.actions

export default cartSlice.reducer
