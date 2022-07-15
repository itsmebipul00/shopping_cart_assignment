const productServices = {
	getProducts: async () => {
		try {
			const response = await fetch(
				'https://api.bipulsharma.repl.co/products'
			)
			const data = await response.json()
			return data
		} catch (error) {
			throw error
		}
	},
}

export default productServices
