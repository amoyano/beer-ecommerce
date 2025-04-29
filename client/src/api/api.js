// API functions to fetch data from the backend
const API_URL = import.meta.env.VITE_API_URL || `http://localhost:${process.env.PORT || 5000}`

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/products`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const products = await response.json()

    // Add ratings for display purposes (in a real app, this would come from the backend)
    const productsWithRatings = products.map((product) => ({
      ...product,
      rating: product.id % 2 === 0 ? 4.2 : 4.8,
      // Use the first SKU's price for the product listing
      price:
        product.skus && product.skus.length > 0
          ? (async () => {
              const stockPrice = await fetchStockPrice(product.skus[0].code)
              return stockPrice?.price || 0
            })()
          : 0,
    }))

    // Resolve all the price promises
    const resolvedProducts = await Promise.all(
      productsWithRatings.map(async (product) => {
        if (typeof product.price === "object" && product.price.then) {
          const resolvedPrice = await product.price
          return { ...product, price: resolvedPrice }
        }
        return product
      }),
    )

    return resolvedProducts
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export const fetchProductDetails = async (productId) => {
  try {
    // First, fetch the basic product info
    const response = await fetch(`${API_URL}/api/products`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const products = await response.json()
    const product = products.find((p) => p.id === Number(productId))

    if (!product) {
      return null
    }

    // Add rating for display purposes
    product.rating = product.id % 2 === 0 ? 4.2 : 4.8

    // Then fetch stock and price for each SKU and create variants
    const variantPromises = product.skus.map(async (sku) => {
      const stockPriceData = await fetchStockPrice(sku.code)
      return {
        sku: sku.code,
        size: sku.name,
        price: stockPriceData?.price || 0,
        stock: stockPriceData?.stock || 0,
      }
    })

    const variants = await Promise.all(variantPromises)

    return {
      ...product,
      variants,
    }
  } catch (error) {
    console.error("Error fetching product details:", error)
    throw error
  }
}

export const fetchStockPrice = async (sku) => {
  try {
    const response = await fetch(`${API_URL}/api/stock-price/${sku}`)

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching stock/price for SKU ${sku}:`, error)
    throw error
  }
}
